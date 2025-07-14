# Project Tool

A comprehensive project management and resource allocation system designed for enterprise-level project coordination and team management.

## Table of Contents

- [Project Overview](#project-overview)
- [Domain & Business Context](#domain--business-context)
- [Requirements](#requirements)
- [Data Model](#data-model)
- [Technology Stack](#technology-stack)
- [Architecture & Design](#architecture--design)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Deployment](#deployment)
- [Features](#features)
- [API Documentation](#api-documentation)
- [Testing Strategy](#testing-strategy)
- [Performance & Scalability](#performance--scalability)
- [Security](#security)
- [Monitoring & Logging](#monitoring--logging)
- [Contributing](#contributing)
- [License](#license)

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
The **frontend** is a React and RemixJS (server-rendered React app with client-side transitions) that communicates with the NestJS **gateway**. The **gateway** is responsible for serving the frontend with the needed data from
one or more services living in the NestJS **service core**. The **gateway** communicates with the **service core** using request-reply via NATS. Services within the **service core** does not communicate directly but only via domain events
decoupling the services from each other. The **service core** is responsible for the business logic and data access, using **Neo4j** as the primary data store. **MongoDB** is used for storing domain events.

![High level application architecture](/docs/high-level-application-architecture.png)


### Deployment architecture
The application is designed to be deployed in multiple docker containers, allowing for scalability and separation of concerns. The **service core**, **gateway**, **frontend**, and databases are all containerized. 
The architecture supports horizontal scaling of services and can be deployed in a cloud environment or on-premises. In practice, the application was deployed on a single linux machine residing on Google Cloud Platform.
A webserver (Nginx) was used to serve the frontend. This constricted outside access to the application to a single port (80) and allowed for SSL termination.

![Deployment architecture](/docs/deployment-diagram.png)




#### Project Management
- **Workpackage**: Core project unit with planning, stages, and financial tracking
- **Plan/Activity**: Detailed project planning with timelines and resource allocation
- **ProjectManager**: Project leadership and management roles
- **Stage**: Project lifecycle stages (e.g., Planning, Execution, Completion)
- **BookingStage**: Resource booking status tracking

#### Resource Management
- **Resource**: Human resources with skills, costs, and availability
- **ResourceType**: Categorization of resource types and specializations
- **Team**: Dynamic team compositions for project assignments
- **Assignment**: Resource-to-task allocations with time periods

#### Financial & Contract Management
- **Contract**: Project contracts and agreements
- **FinancialSource**: Funding sources and budget allocation
- **Cost Tracking**: Resource costs, sales, profit calculations

#### User Management & Security
- **User**: System users with authentication and profiles
- **AccessGroup**: Role-based permission groups
- **Credentials**: Secure authentication data
- **Permissions**: Granular access control per page/feature

### Graph Relationships (Neo4j)
- `(User)-[:HAS_CREDENTIALS]->(Credentials)`
- `(User)-[:IN_ACCESS_GROUP]->(AccessGroup)`
- `(Workpackage)-[:HAS]->(Plan)`
- `(Plan)-[:MANAGES]->(ProjectManager)`
- `(Plan)<-[:IS_ASSIGNED_TO]-(Agent)-[:IS]->(Resource)`
- `(Workpackage)-[:IS_UNDER]->(Contract)`
- `(Workpackage)-[:IS_FINANCED_BY]->(FinancialSource)`

## Technology Stack

### Frontend
- **Framework**: Remix (React-based full-stack framework)
- **UI Library**: Material-UI (MUI) with custom design system
- **State Management**: MobX with MobX-Keystone for reactive state
- **Charts & Visualization**: 
  - Visx for custom data visualizations
  - Recharts for standard charts
  - React Big Calendar for scheduling
- **Forms**: React Hook Form with Yup validation
- **Real-time**: Socket.IO client for live updates
- **Build Tool**: Vite for fast development and building

### Backend
- **Framework**: NestJS with TypeScript
- **Architecture**: Microservices with CQRS pattern
- **Message Broker**: NATS for inter-service communication
- **Authentication**: JWT with Passport.js
- **Validation**: Class-validator and class-transformer
- **Email**: SendGrid for transactional emails

### Databases
- **Document Store**: MongoDB with Mongoose ODM
- **Graph Database**: Neo4j Enterprise with APOC procedures
- **Caching**: Redis for session and data caching

### Infrastructure
- **Containerization**: Docker with Docker Compose
- **Package Manager**: pnpm for monorepo management
- **Development**: Hot reloading, TypeScript compilation
- **Testing**: Jest for unit and integration tests

## Architecture & Design

### System Architecture
The application follows a microservices architecture with clear separation of concerns:

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │    Gateway      │    │  Service Core   │
│   (Remix)       │◄──►│   (NestJS)      │◄──►│   (NestJS)      │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                              │                        │
                              ▼                        ▼
                       ┌─────────────────┐    ┌─────────────────┐
                       │      NATS       │    │   MongoDB +     │
                       │   (Message      │    │     Neo4j       │
                       │    Broker)      │    │   (Databases)   │
                       └─────────────────┘    └─────────────────┘
```

### Design Patterns
- **CQRS (Command Query Responsibility Segregation)**: Separate read and write operations
- **Event Sourcing**: Track all changes as events
- **Repository Pattern**: Abstract data access layer
- **Factory Pattern**: Object creation and initialization
- **Observer Pattern**: Reactive state management with MobX

### Frontend Architecture
- **Component-Based**: Reusable UI components with Material-UI
- **State Management**: MobX-Keystone for complex state modeling
- **Routing**: Remix file-based routing with nested layouts
- **Real-time Updates**: WebSocket connections for live data synchronization

## Project Structure

```
project-tool/
├── packages/
│   ├── frontend/                 # Remix-based frontend application
│   │   ├── app/
│   │   │   ├── routes/          # File-based routing
│   │   │   ├── src/
│   │   │   │   ├── components/  # Reusable UI components
│   │   │   │   ├── features/    # Feature-specific modules
│   │   │   │   ├── hooks/       # Custom React hooks
│   │   │   │   └── design-system/ # Design tokens and themes
│   │   │   └── pages/           # Page-specific components
│   │   └── public/              # Static assets
│   └── services/                # Backend microservices
│       ├── apps/
│       │   ├── gateway/         # API gateway service
│       │   └── service-core/    # Core business logic service
│       └── libs/                # Shared libraries
│           ├── cqrs/            # CQRS implementation
│           ├── definitions/     # Shared type definitions
│           ├── dto/             # Data transfer objects
│           ├── events/          # Event definitions
│           ├── mongodb/         # MongoDB utilities
│           ├── neo4j/           # Neo4j utilities
│           └── nats/            # NATS messaging utilities
├── docker-compose.yml           # Development environment setup
└── package.json                 # Root package configuration
```

## Getting Started

### Prerequisites
- Node.js >= 20.0.0
- pnpm >= 8.0.0
- Docker and Docker Compose
- Neo4j Enterprise (for production)

### Environment Setup
1. Clone the repository
2. Install dependencies: `pnpm install`
3. Set up environment variables (see `.env.example`)
4. Start development services: `docker-compose up -d`
5. Run the application: `pnpm dev`

### Environment Variables
```bash
# Database Connections
NEO4J_AUTH=neo4j/password
NEO4J_USER=neo4j
NEO4J_PASSWORD=password
MONGO_CONN=mongodb://mongo-db:27017

# Messaging
NATS_CONN=nats://nats-service:4222

# Authentication
JWT_SECRET=your-jwt-secret

# External Services
SENDGRID_API_KEY=your-sendgrid-key
```

## Development

### Available Scripts
```bash
# Development
pnpm dev              # Start all services in development mode
pnpm build            # Build all packages
pnpm test             # Run tests across all packages
pnpm lint             # Lint all packages

# Individual package commands
pnpm --filter @project-tool/frontend dev
pnpm --filter @project-tool/services start:dev
```

### Development Workflow
1. **Frontend Development**: Hot reloading with Vite
2. **Backend Development**: NestJS with file watching
3. **Database Changes**: Neo4j Cypher queries and MongoDB migrations
4. **Testing**: Jest with coverage reporting

### Code Quality
- **TypeScript**: Strict type checking across all packages
- **ESLint**: Consistent code style and best practices
- **Prettier**: Automated code formatting
- **Pre-commit Hooks**: Automated quality checks

## Deployment

[TO BE FILLED: Deployment strategies, CI/CD pipeline, production environment setup]

## Features

### Core Features
- **Project Management**: Complete workpackage lifecycle management
- **Resource Planning**: Advanced capacity and resource allocation
- **Gantt Charts**: Interactive project timeline visualization
- **Team Management**: Dynamic team composition and assignment
- **Financial Tracking**: Contract and budget management
- **User Administration**: Role-based access control
- **Real-time Updates**: Live data synchronization across users

### Advanced Features
- **Capacity Planning**: Resource utilization and availability tracking
- **Timeline Management**: Interactive scheduling and timeline manipulation
- **Reporting**: Comprehensive project and resource reports
- **Email Notifications**: Automated user communication
- **Multi-tenancy**: Support for multiple organizations

## API Documentation

[TO BE FILLED: API endpoints, request/response schemas, authentication]

## Testing Strategy

### Test Types
- **Unit Tests**: Individual component and service testing
- **Integration Tests**: Service-to-service communication testing
- **E2E Tests**: Full user workflow testing
- **Performance Tests**: Load and stress testing

### Test Coverage
- Frontend components and hooks
- Backend services and controllers
- Database operations and queries
- API endpoints and validation

## Performance & Scalability

### Performance Optimizations
- **Database Indexing**: Optimized Neo4j and MongoDB queries
- **Caching**: Redis-based caching for frequently accessed data
- **Lazy Loading**: Component and data lazy loading
- **Code Splitting**: Dynamic imports for better bundle sizes

### Scalability Considerations
- **Microservices**: Horizontally scalable service architecture
- **Message Queuing**: NATS for reliable inter-service communication
- **Database Sharding**: Support for distributed data storage
- **Load Balancing**: Gateway-level request distribution

## Security

### Security Measures
- **Authentication**: JWT-based secure authentication
- **Authorization**: Role-based access control (RBAC)
- **Input Validation**: Comprehensive input sanitization
- **HTTPS**: Secure communication protocols
- **Session Management**: Secure session handling

### Data Protection
- **Password Hashing**: Secure credential storage
- **API Security**: Rate limiting and request validation
- **Audit Logging**: Comprehensive activity tracking

## Monitoring & Logging

[TO BE FILLED: Monitoring tools, logging strategy, alerting, performance metrics]

## Contributing

[TO BE FILLED: Contribution guidelines, code review process, development standards]

## License

[TO BE FILLED: License information and terms]
