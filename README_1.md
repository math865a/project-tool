# Project Tool

A comprehensive project management and resource allocation system designed for enterprise-level project coordination and team management.

## Project Overview

Project Tool is a sophisticated project management application developed for a Danish company that successfully served 60+ concurrent users. The system provides comprehensive project planning, resource allocation, capacity management, and team coordination capabilities through an intuitive web interface.


## Note about the author

I worked as an external consultant for the Danish company that I created this system for. I entered the role, never having designed or built a software system before and barely knowing how to code. In the process of building this system,
I went from a novice programmer to a battle-scarred developer that has learned things the hard way. I learned everything on the go and of course this meant a lot of bad decisions were made along the way.

### Key Capabilities
- **Project Management**: Work package creation, tracking, and lifecycle management
- **Resource Allocation**: Team assignment, capacity planning, and workload distribution
- **Gantt Chart Visualization**: Interactive project timelines and scheduling
- **Capacity Management**: Real-time resource availability and utilization tracking
- **Financial Tracking**: Contract and financial source management
- **User Management**: Role-based access control and user administration

## Business Context

A Danish company operating across multiple sectors, with a strong foundation in networking and IT infrastructure, identified project management as one of its key business areas. At the time of system development, the company had secured two major framework agreements with a large client—an engagement valued at approximately 500 million DKK. This agreement comprised hundreds of smaller sub-projects, referred to internally as work packages, managed by a team of approximately 15 project managers.

The existing resource management approach, based on spreadsheets, emails, and manual coordination, proved inefficient and error-prone at this scale. As project volume and complexity grew, the company faced a critical technology gap in planning and allocating human resources.

To address this challenge, the company initiated the development of a custom project and resource management tool with the following objectives:

- Track all work packages in a structured and transparent manner
- Streamline staff assignment based on availability, role (resource type), and workload
- Provide visibility into team capacity and potential overcommitments
- Support project managers in making informed staffing decisions
- Replace fragmented workflows with a unified digital interface
- Create a centralized platform for project planning and resource allocation
- Enable personnel to view their assignments and workload in real-time

Project Tool was developed to meet these needs, tailored specifically to the company's processes and constraints.

## Domain and Data Model

The client, a large public entity with a complex financial structure, required that each work package be identified by its financial source and contract due to the two secured framework agreements:

![Organizational context of a work package](/docs/workpackage-organizational-context.png)

The framework agreement included fixed hourly rates for different types of skilled work, defined by roles (resource types) such as senior project manager, technical project manager, network technician, etc. An agreed-upon list of employees (resources) from various company departments were designated one or more resource types, allowing a single resource to work on both contracts under different resource type aliases.

![Context of a resource type](/docs/resource-type-context.png)

Each work package had a well-defined purpose and scope, characterized by a set of measurable deliverables with defined deadlines. These deliverables were part of the negotiation between the company and client when defining each work package. For practical project management purposes, each delivery was broken down into several tasks that together would complete the delivery:

![Work package activities](/docs/workpackage-activities.png)

The primary purpose of Project Tool was to manage resource allocations and capacity. Each resource (with an assigned resource type) would be assigned individual tasks within a work package, creating an allocation. Allocations needed to be highly flexible, as multiple resources could be assigned to a task with work distributed unevenly over the task duration. This uneven distribution could vary for each resource, allowing multiple allocations per resource for a single task that could be discontinuous over the task duration. Each allocation resulted in an array of bookings, one for each day over its period, with the total duration divided by the number of days as the booking duration for each day.

![Planning context](/docs/planning-context.png)

When a work package was ordered by the client, the company first generated a proposal. This involved planning the entire work package, including resource allocation to tasks, to reserve (soft book) the required resources. After client consultation, the work package could be accepted, and resources would be hard booked. A booking stage was introduced at the work package level to manage whether allocated resources were final.

![Booking stage](/docs/booking-stage.png)

When a work package was first ordered by the client, a project manager was assigned to oversee the work package planning and resource allocation:

![Project manager manages a workpackage](/docs/project-manager-workpackage.png)

![Authorization and user roles](/docs/authorization-and-user-resource-project-manager.png)

## Architecture

### High-Level Application Architecture

The application consists of several components with clear interaction patterns:

- **Frontend**: React and RemixJS (server-rendered React app with client-side transitions) that communicates with the NestJS gateway via HTTPS and WebSockets
- **Gateway**: NestJS component responsible for serving the frontend with data from one or more services in the service core
- **Service Core**: NestJS services that communicate via request-reply through NATS with the gateway
- **Domain Events**: Services within the service core communicate only via domain events, decoupling them from each other
- **Data Storage**: Neo4j as the primary data store for business logic and data access, MongoDB for storing domain events

![High level application architecture](/docs/high-level-application-architecture.png)

### Deployment Architecture

The application is designed for deployment in multiple Docker containers, enabling scalability and separation of concerns. The service core, gateway, frontend, and databases are all containerized. The architecture supports horizontal scaling and can be deployed in cloud environments or on-premises. In practice, the application was deployed on a single Linux machine on Google Cloud Platform, with Nginx serving the frontend and constraining external access to a single port (80) while enabling SSL termination.

![Deployment architecture](/docs/deployment-diagram.png)

### Database Schema

The database schema closely mirrors the ER models of the domains described above. Bookings are modeled as relationships between an allocation and a business day, leveraging the strong relational capabilities of the graph database for querying bookings as relationships. A calendar is defined by a specific pattern of work days and time per week, with each resource assigned a calendar, allowing flexible modeling of different work hours.

As mentioned in the domain description, a resource and resource type pair books to tasks. In the data model, this is represented as an agent, which is then the entity allocated to tasks.

Plans, deliveries, tasks, and allocations all have an "activity" label in addition to their specific labels to enable hierarchical queries.

Note: In a redesign of this data model, plans would be omitted, with work packages having an activity label instead, and project managers managing work packages directly. The introduction of plans is redundant and unnecessary.

![Database schema](/docs/database-schema.png)

### Rationale for Choosing a Graph Database

The primary performance consideration was the writing and reading of bookings. Work packages were planned on Gantt charts, which were write-heavy due to frequent task and allocation movements. Real-time booking views were required, with immediate updates on the capacity board whenever task periods were adjusted, displayed in three views: daily, weekly, and monthly. Additionally, filtering capabilities were needed (e.g., showing only soft bookings).

These requirements ruled out periodic aggregation, which would otherwise be a good choice (and might make traditional SQL databases preferable), in favor of a query-on-demand strategy. This approach required a database that excelled at querying relationships (deep traversal), making a graph database the optimal choice.

SQL databases are efficient at joining 1-2 relationships, but graph databases are approximately 10x faster for 3-5 hops.

With a graph database, bookings could be queried directly with excellent performance, resulting in a seamless experience when viewing bookings from the capacity board:

```typescript
@QueryHandler(CapacityBatchQuery)
export class CapacityBatchQueryHandler
    implements IQueryHandler<CapacityBatchQuery, CapacityBatch[]>
{
    constructor(private readonly client: Neo4jClient) {}

    async execute({ dto }: CapacityBatchQuery): Promise<CapacityBatch[]> {
        const queryResult = await this.client.read(this.query, {
            ...dto,
            bookingStages: ["Soft", "Hard"],
        });
        const response: any[] = queryResult.records.map((d) =>
            d.get("capacity")
        );
        return response;
    }

    query = `
            UNWIND $bounds AS bound
            MATCH (resource:Resource)--(calendar:Calendar)-[cap:HAS_WORKDAY]-(day:CalendarDay)
                WHERE date(bound.ts) <= date(day.date) AND date(bound.tf) > date(day.date)
                AND resource.id IN $rows
            WITH resource, bound, round(sum(cap.capacity)/60,1) as capacityDuration

            CALL {
                WITH bound, resource
                OPTIONAL MATCH (resource)<-[:IS]-(:Agent)-[:IS_ASSIGNED_TO]->(a:Allocation)-[b:HAS_BOOKING]->(day:CalendarDay)
                    WHERE date(bound.ts) <= date(day.date) AND date(bound.tf) > date(day.date)
                    AND (a)<-[:HAS*4]-(:Workpackage)--(:BookingStage {name: "Soft"})
                RETURN round(sum(b.duration),1)/60 AS softBookedDuration
            }

            CALL {
                WITH bound, resource
                OPTIONAL MATCH (resource)<-[:IS]-(:Agent)-[:IS_ASSIGNED_TO]->(a:Allocation)-[b:HAS_BOOKING]->(day:CalendarDay)
                    WHERE bound.ts <= day.date AND bound.tf > day.date
                    AND (a)<-[:HAS*4]-(:Workpackage)--(:BookingStage {name: "Hard"})
                RETURN round(sum(b.duration),1)/60 AS hardBookedDuration
            }

            RETURN {
                id: apoc.text.join([resource.id, bound.ts],"-"),
                rowId: resource.id,
                stats: {
                    softBookedDuration: softBookedDuration,
                    hardBookedDuration: hardBookedDuration,
                    capacityDuration: capacityDuration
                },
                interval: {
                    ts: bound.ts,
                    tf: bound.tf
                },
                viewMode: $viewMode,
                rowMode: $rowMode
            } AS capacity
    `;
}
```

Query variables are defined as follows:
- **viewMode**: The time scale being used (daily, weekly, or monthly)
- **rows**: The IDs of the resources being queried
- **bounds**: A list of start dates and end dates for the query

The query filters on 4+ connected relationships. In summary, for a given resource and time range:

1. Find all CalendarDay nodes connected to the resource via:
   - Resource linked by IS relationship from an Agent
   - Agent assigned to an Allocation via IS_ASSIGNED_TO relationship
   - Allocation having a booking on a CalendarDay via HAS_BOOKING relationship

2. Filter bookings where:
   - The booking date falls within the specified range
   - The Allocation is connected (via 4 HAS relationships) to a Workpackage associated with a BookingStage node named "Soft"

This process is repeated twice for the number of rows given. In this scenario, a graph database provides unmatched performance.
