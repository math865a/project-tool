# Project Tool

A comprehensive project management and resource allocation system designed for enterprise-level project coordination and team management.

## Project Overview

Project Tool is a sophisticated project management application that was developed for a company and successfully served 60+ concurrent users. 
The system provides comprehensive project planning, resource allocation, capacity management, and team coordination capabilities through an intuitive web interface.

### Key Capabilities
- **Project Management**: Workpackage creation, tracking, and lifecycle management
- **Resource Allocation**: Team assignment, capacity planning, and workload distribution
- **Gantt Chart Visualization**: Interactive project timelines and scheduling
- **Capacity Management**: Real-time resource availability and utilization tracking
- **Financial Tracking**: Contract and financial source management
- **User Management**: Role-based access control and user administration

## Business Context
A Danish company (hereafter referred to as the company) operates across a broad range of sectors, with a strong foundation in networking and IT infrastructure. One of its key business areas is project management.
At the time this system was initiated, the company had just secured two major framework agreements with a large client—an engagement valued at approximately 500 million DKK. This agreement comprised hundreds of smaller sub-projects, referred to internally as work packages. A team of around 15 project managers would be responsible for planning these work packages: defining their scope, assigning appropriate personnel, and monitoring progress throughout the lifecycle.
However, the existing resource management approach—based on spreadsheets, emails, and manual coordination—proved inefficient and error-prone, especially at this scale. As the volume and complexity of projects grew, it became increasingly clear that the company faced a critical technology gap in planning and allocating its human resources.
To address this challenge, the company initiated the development of a custom project and resource management tool. The goal was to create a centralized system that could:

- Track all work packages in a structured and transparent way
- Streamline the assignment of staff based on availability, role (resource type), and workload
- Provide visibility into team capacity and potential overcommitments
- Support project managers in making informed staffing decisions
- Replace fragmented workflows with a unified digital interface
- A centralized platform for project planning and resource allocation
- Personnel being able to view their assignments and workload in real-time

Project Tool was developed to meet those needs, tailored specifically to the company's processes and constraints.

## Domain and data model
The client is a large, public actor with a complex financial structure and as two contracts (framework agreements) were secured, each **work package** was identified by their **financial source** and **contract**:

![Organizational context of a work package](/docs/workpackage-organizational-context.png)

The framework agreement included fixed hourly rates for different kinds of skilled work. These were defined by roles (**resource types**) such as *senior project manager*, *technical project manager*, *network technician* etc.
An agreed upon list of employees (**resources**) from various departments in the company were designated one or more **resource types**. This also meant that a single resource could work on both contracts under different resource type aliases.

![Context of a resource type](/docs/resource-type-context.png)

A work package had a well defined purpose and scope, and crucially it was defined by a set of measurable deliverables (**deliveries**) with a well defined deadline. These **deliveries** we part of the negotiation between the company
and the client when defining each work package. For practical project management purposes, each delivery was broken down into several **tasks** that together would complete a delivery:

![Work package activities](/docs/workpackage-activities.png)

The main purpose of **Project Tool** was to manage resource allocations and capacity. In practice, each **resource** (with an assigned **resource type**) would be assigned individual **tasks** in
a **work package** creating an **allocation**. In practise, **allocations** had to be very flexible since multiple **resources** could be assigned a **task**, but the amount of work could be spread unevenly over the duration of the **task**
and this uneven distribution was not necessarily the same for each **resource**. Thus each **resource** could have multiple **allocations** for a single **task** that could be discontinuous over the duration of the **task**. 
Each **allocation** would thus result in an array of **bookings**, one for each day over its period with the total duration divided by the number of days as the booking duration of each day. 

![Planing context](/docs/planning-context.png)

When a **work package** was ordered by the client, the company first generated a proposal. Internally, this involved planning out the entire workpackage including allocation resources to tasks in order to reserve (soft book) the required **resources**
for **tasks**. After consulting with the client, the **work package** could be accepted and the **resources** should be hard booked. Thus a **booking stage** was introduced on the **work package** level in order to manage whether
the **resources** **allocated** to the **tasks** where final or not.

![Booking stage](/docs/booking-stage.png)

When a **work package** was first ordered by the client, a **project manager** was assigned to the work package. The **project manager** was in charge of planning the **work package** and allocation **resources**:

![Project manager manages a workpackage](/docs/project-manager-workpackage.png)


![Authorization and user roles](/docs/authorization-and-user-resource-project-manager.png)

## Requirements

## Architecture

### High level application architecture

The application consists of several components with clear interaction patterns. 
The **frontend** is a React and RemixJS (server-rendered React app with client-side transitions) that communicates with the NestJS **gateway** via https and websockets. The **gateway** is responsible for serving the frontend with the needed data from
one or more services living in the NestJS **service core**. The **gateway** communicates with the **service core** using request-reply via NATS. Services within the **service core** does not communicate directly but only via domain events
decoupling the services from each other. The **service core** is responsible for the business logic and data access, using **Neo4j** as the primary data store. **MongoDB** is used for storing domain events.

![High level application architecture](/docs/high-level-application-architecture.png)


### Deployment architecture
The application is designed to be deployed in multiple docker containers, allowing for scalability and separation of concerns. The **service core**, **gateway**, **frontend**, and databases are all containerized. 
The architecture supports horizontal scaling of services and can be deployed in a cloud environment or on-premises. In practice, the application was deployed on a single linux machine residing on Google Cloud Platform.
A webserver (Nginx) was used to serve the frontend. This constricted outside access to the application to a single port (80) and allowed for SSL termination.

![Deployment architecture](/docs/deployment-diagram.png)


### Database schema

The database schema looks a lot like the ER models of the domains above. Notably, **bookings** are modeled as relationships between an **allocation** and a **business day**. This lets me take advantage of the strong relational capabilities
of the graph database as i can query the bookings as a relationship. A **calendar** is defined by a specific pattern of work days and time per week and a **resource** is assigned a **calendar**. This allows for modeling different work hours
quite flexibly. 

As mentioned in the domain description, it is a pair consisting of a **resource** and a **resourcetype** that are booking to tasks. In the data model, this is modeled as an **agent** who is then the entity that is allocated to tasks.

**Plans**, **deliveries**, **tasks**, and **allocations** all have a label called **activity** besides their own specific label (such as allocation) in order enable hierarchical queries. 

If i were to redesign this data model, i would omit **plans** and make a **work package** have an **activity** label instead and making a **project manager** manage the **work package** instead. 
The introduction of a **plan** is redundant and not needed. 

![Database schema](/docs/database-schema.png)

### Rationale behind choosing a graph database
The main feature that required significant consideration in regard to performance, were the writing and (especially) the reading of bookings.
The work packages were planned on a Gantt chart, which were very write heavy since tasks and allocations were moved around a lot. We wanted to have a real time view of the bookings, so every time someone adjusted the period of a task,
all the bookings should immediately show on the capacity board and we wanted to show this in 3 different views - daily, weekly, and monthly. Besides, we wanted the ability to filter and for example only show the soft bookings.
This requirement meant that I ruled out aggregating periodically, which would otherwise be a good choice (and would perhaps even making a traditional SQL database a better choice), 
and instead opting for a query-on-demand strategy. This required a database that excelled at querying relationships (deep traversal), such as a graph database. 

SQL databases are quite efficient at joining 1-2 relationships but when we get to 3-5 hops a graph database is about 10x faster.

Equipped with a graph database, I could query the bookings directly and with excellent performance, resulting in a seamless experience when viewing the bookings from the capacity board:

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

Here the variables are defined as follow:
- *viewMode* = The time scale we are using i.e. daily, weekly, or monthly
- *rows* = The ids of the resources that we are query for
- *bounds* = A list of start dates and end dates that we are querying for

As you can tell from the query, we are filtering on 4+ connected relationships. In words, what we are doing is:

```
For a given resource and a time range defined by bound.ts (start time) and bound.tf (finish time):
- Find all CalendarDay nodes (called day) that are connected to the resource via this path:
    - The resource is linked by an IS relationship from an Agent,
    - The Agent is assigned to an Allocation via an IS_ASSIGNED_TO relationship,
    - That Allocation has a booking (b) on a CalendarDay (day) via a HAS_BOOKING relationship.
- Filter those bookings where:
    - The booking's date (day.date) falls within the range from bound.ts (inclusive) to bound.tf (exclusive),
    - And the Allocation is connected (via **4 HAS relationships**) up to a Workpackage that is associated (via a -- relationship) to a BookingStage node named "Soft".*
```

And we do this 2x the amount of rows given. Here, a graph database is unmatched.


### Known bugs







