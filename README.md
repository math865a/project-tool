# Project Tool

This application was originally used to manage resource allocation across many small projects within the project department of a large company.

Think **Microsoft Project meets resource scheduling** — i.e. creating Gantt-style project plans, assigning resources to tasks, and tracking scheduled time. It also includes a centralized capacity overview for each resource, with filtering down to individual tasks and project level.

This is a **complete rebuild from scratch** to improve the architecture, user experience, and remove dependencies on paid services. It is currently a work in progress.

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

The system is under active reconstruction. Core functionality is still in progress, as the app is being re-architected to improve modularity, scalability, and developer experience.

I am aware of plenty of security issues (such as hardcoded credentials in the Docker Compose file) and will address them in due course. The focus is currently on building a solid foundation for the application.

Feel free to explore the code — this repo represents my approach to real-world fullstack systems built from the ground up.
