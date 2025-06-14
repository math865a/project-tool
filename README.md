# Project Tool

This application was used to manage resource allocation across many small projects in the project department of a large company.
Think Microsoft Project meets resource scheduling i.e. creating a project plan in a Gantt chart and assigning resources to tasks and allocation scheduled time.
Includes a central overview of the capacity of each resources than can be filtered down to tasks and project level.
It is a work in progress and is being rebuilt from the ground up to improve the architecture and functionality.

## Stack

- frontend: React, TypeScript, Vite
- backend: NestJS, TypeScript
- databases:
  - Neo4j (Primary domain database)
  - MongoDB (Used for event and logging)

Everything is containerized using Docker for easy development and deployment.

## Project Structure

```
project-tool/
├── packages/
│   ├── frontend/     # Frontend application
│   ├── backend/      # Backend services
│   └── shared/       # Shared utilities and types
├── package.json      # Root package configuration
└── pnpm-workspace.yaml
```

## Prerequisites

- Node.js (Latest LTS version recommended)
- pnpm (Package manager)
- Docker (for containerized development)

## Getting Started

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Start the development containers:

   Ensure Docker is running, then execute the following commands in the root directory:

   ```bash
    docker compose up -d
   ```
   
3. Access the applications:
    - Frontend: [http://localhost:5173](http://localhost:5173)
    - Backend: [http://localhost:5001](http://localhost:5001)
    - Neo4j Browser: [http://localhost:7474](http://localhost:7474)
      - Default credentials: `neo4j` / `password`
    - Mongo Express: [http://localhost:8888](http://localhost:8888)
      - Default credentials: `admin` / `pass`

4. State of development:

   The application is not yet fully functional, and some features are still being implemented.
   I am currently recreating it from scratch to improve the architecture and functionality as well as removing dependencies on paid services.
   

