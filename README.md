# Project Tool

This application was originally used to manage resource allocation across many small projects within the project
department of a large company.

Think **Microsoft Project meets resource scheduling** — i.e. creating Gantt-style project plans, assigning resources to
tasks, and tracking scheduled time. It also includes a centralized capacity overview for each resource, with filtering
down to individual tasks and project level.

This is a **complete rebuild from scratch** to improve the architecture, user experience, and remove dependencies on
paid services. It is currently a work in progress.

---

## 🛠️ Tech Stack

- **Frontend:** React, TypeScript, Vite
- **Backend:** NestJS, TypeScript
- **Databases:**
    - **Neo4j** (Primary domain database)
    - **MongoDB** (For logging and event tracking)

All components are containerized using Docker for simplified development and deployment.

---

## 📁 Project Structure

```
project-tool/
├── packages/
│   ├── frontend/     # Frontend application
│   ├── backend/      # Backend services
│   └── shared/       # Shared utilities and types
├── package.json      # Root package configuration
└── pnpm-workspace.yaml
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (Latest LTS recommended)
- [pnpm](https://pnpm.io/)
- [Docker](https://www.docker.com/)

### Setup

1. **Install dependencies**
   ```bash
   pnpm install
   ```

2. **Start development containers**

   Make sure Docker is running, then run:
   ```bash
   docker compose up -d
   ```

3. **Access the services**
    - Frontend: [http://localhost:5173](http://localhost:5173)
    - Backend: [http://localhost:5001](http://localhost:5001)
    - Neo4j Browser: [http://localhost:7474](http://localhost:7474)  
      Default login: `neo4j` / `password`
    - Mongo Express: [http://localhost:8888](http://localhost:8888)  
      Default login: `admin` / `pass`

---

## 📌 Development Status

The system is under active reconstruction. Core functionality is still in progress, as the app is being re-architected
to improve modularity, scalability, and developer experience.

I am aware of plenty of security issues (such as hardcoded credentials in the Docker Compose file) and will address them
in due course. The focus is currently on building a solid foundation for the application.

Feel free to explore the code — this repo represents my approach to real-world fullstack systems built from the ground
up.

## Architecture

### Backend Architecture

The backend is built using **NestJS** with a modular, domain-driven design that follows clean architecture principles.
The system is designed for scalability, maintainability, and clear separation of concerns.

#### Core Architecture Patterns

- **Domain-Driven Design (DDD)**: Business logic is organized around domain modules
- **Command Query Responsibility Segregation (CQRS)**: Separates read and write operations for better performance and
  scalability
- **Event-Driven Architecture**: Uses domain events for loose coupling between modules
- **Repository Pattern**: Abstracts data access through dedicated repository interfaces

#### Module Structure

```
src/
├── app/                          # Application modules
│   ├── resource-management/      # Resource allocation and management
│   │   ├── resources/           # Resource entities and operations
│   │   ├── resourcetypes/       # Resource type definitions
│   │   ├── resource-schedule/   # Resource scheduling logic
│   │   └── agents/              # Agent management
│   ├── project-management/       # Project lifecycle management
│   │   ├── project-managers/    # Project manager operations
│   │   ├── workpackages/        # Work package management
│   │   ├── team/                # Team management
│   │   └── planning/            # Project planning features
│   ├── scheduling/              # Scheduling and calendar management
│   │   ├── scheduler/           # Core scheduling algorithms
│   │   └── calendars/           # Calendar and availability management
│   ├── organization/            # Organizational structure management
│   └── monitoring/              # System monitoring and observability
├── libs/                         # Shared libraries and utilities
│   ├── cqrs/                    # CQRS implementation
│   ├── neo4j/                   # Neo4j database integration
│   ├── mongodb/                 # MongoDB integration
│   ├── events/                  # Event handling infrastructure
│   ├── db-initializer/          # Database initialization
│   └── util/                    # Shared utilities
└── main.ts                      # Application entry point
```

#### Key Technologies & Dependencies

- **NestJS Framework**: Provides the core application structure and dependency injection
- **Neo4j**: Primary domain database for complex graph relationships
- **MongoDB**: Secondary database for logging, events, and analytics
- **CQRS**: Command/Query separation for optimized read/write operations
- **WebSockets**: Real-time communication via Socket.IO
- **JWT Authentication**: Secure API access with Passport.js
- **Event Emitter**: Domain event publishing and handling

#### Data Layer Architecture

- **Neo4j Integration**: Handles complex project relationships, resource allocations, and dependency graphs
- **MongoDB Integration**: Stores event logs, audit trails, and analytics data
- **Repository Pattern**: Abstracts database operations through dedicated repositories
- **Connection Pooling**: Optimized database connections for performance

#### Communication Patterns

- **REST APIs**: Standard HTTP endpoints for CRUD operations
- **WebSocket Gateway**: Real-time updates for Gantt charts and collaborative features
- **Event-Driven**: Domain events for cross-module communication

#### Security & Authentication

- **JWT-based Authentication**: Secure token-based authentication
- **Passport.js Integration**: Flexible authentication strategies

This architecture provides a solid foundation for a scalable project management system with clear separation of
concerns, maintainable code structure, and room for future enhancements.

#### Choice of database

The choice of **Neo4j** as the primary database is driven by the need to manage complex relationships between projects,
resources, and tasks. Neo4j's graph database model allows for efficient querying of interconnected data, which is
essential for features like resource allocation, project dependencies, and scheduling.

In an earlier version i used MongoDB as the primary database, but it proved to be less efficient for the
project management domain, especially when dealing with complex relationships and queries. The switch to Neo4j
allows for more natural data modeling and querying, leveraging the strengths of graph databases for this use case.

The plan was then to use the complex graph network to generate insights into which resources are often booked to which
projects, and to identify potential bottlenecks or over-allocations. This would enable better decision-making and
resource management across the organization.

#### Choice of CQRS and Event-Driven Architecture

The decision to implement **CQRS (Command Query Responsibility Segregation)** and an **Event-Driven Architecture** stems
from the need to separate read and write operations for better performance and scalability. In a project management
system, where data is frequently updated and queried, this separation allows for optimized handling of complex queries
and efficient updates.

Besides, using an event-driven approach enables loose coupling between modules, allowing for easier integration of new
features and services in the future. It also facilitates real-time updates and notifications, enhancing the user
experience in collaborative environments.

Concretely, tasks and resource allocation are updated frequently and in batches and in order to update the bookings
without
blocking the UI, the CQRS pattern is used to separate the read and write operations. This allows for efficient handling
of
updates while keeping the UI responsive. The event-driven architecture further enhances this by allowing real-time
updates
to the frontend, ensuring that users always see the most current data without needing to refresh or reload.

#### Security and authorization

Security is a critical aspect of the application, especially given the sensitive nature of project management data.
The nature of the application is such that users will have multiple levels of access. For example, a project manager
needs
access to projects (workpackages) and tasks, while a skilled employee may only need access to their own tasks.
To address this, the application implements a robust authentication and authorization system using JWT (JSON Web Tokens)
and Passport.js. This ensures that only authorized users can access specific resources and perform actions based on
their
roles and permissions. (Currently not implemented in this version of the project)


