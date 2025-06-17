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

