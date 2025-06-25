# Project Tool Monorepo

A modern pnpm monorepo with shared packages for backend and frontend applications.

## 🏗️ Structure

```
project-tool/
├── packages/
│   ├── shared/          # Shared utilities, types, and constants
│   ├── backend/         # Express.js API server
│   └── frontend/        # React + Vite application
├── package.json         # Root package configuration
├── pnpm-workspace.yaml  # pnpm workspace configuration
└── tsconfig.json        # Root TypeScript configuration
```

## 🚀 Quick Start

### Prerequisites

- Node.js >= 18.0.0
- pnpm >= 8.0.0

### Installation

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Build all packages:
   ```bash
   pnpm build
   ```

3. Start development servers:
   ```bash
   pnpm dev
   ```

This will start:
- Backend server on http://localhost:3000
- Frontend application on http://localhost:5173

## 📦 Packages

### Shared (`@project-tool/shared`)

Contains common utilities, types, and constants used across the monorepo:

- **Types**: `User`, `ApiResponse`
- **Utilities**: `formatDate`, `generateId`, `validateEmail`
- **Constants**: `API_BASE_URL`, `APP_NAME`

### Backend (`@project-tool/backend`)

Express.js API server with:
- RESTful endpoints for user management
- CORS and security middleware
- TypeScript support
- Hot reloading with ts-node-dev

**Available endpoints:**
- `GET /` - Welcome message
- `GET /api/users` - List all users
- `POST /api/users` - Create a new user
- `GET /api/users/:id` - Get user by ID
- `GET /health` - Health check

### Frontend (`@project-tool/frontend`)

React application with:
- Modern UI with dark/light theme support
- Form for adding users
- Real-time user list display
- API integration with backend
- Vite for fast development

## 🛠️ Development

### Available Scripts

**Root level:**
- `pnpm dev` - Start all packages in development mode
- `pnpm build` - Build all packages
- `pnpm test` - Run tests across all packages
- `pnpm lint` - Run linting across all packages
- `pnpm clean` - Clean build outputs

**Individual packages:**
- `pnpm --filter @project-tool/shared dev` - Watch mode for shared package
- `pnpm --filter @project-tool/backend dev` - Start backend in development
- `pnpm --filter @project-tool/frontend dev` - Start frontend in development

### Adding Dependencies

**To a specific package:**
```bash
pnpm --filter @project-tool/backend add express
pnpm --filter @project-tool/frontend add react
```

**To root (dev dependencies):**
```bash
pnpm add -D typescript
```

### Building

Build all packages:
```bash
pnpm build
```

Build specific package:
```bash
pnpm --filter @project-tool/shared build
```

## 🔧 Configuration

### TypeScript

The monorepo uses TypeScript project references for efficient builds:
- Root `tsconfig.json` contains shared compiler options
- Each package has its own `tsconfig.json` extending the root
- Build order is managed through project references

### pnpm Workspace

- `pnpm-workspace.yaml` defines the workspace structure
- Packages can reference each other using `workspace:*` protocol
- Shared dependencies are hoisted to the root

## 📝 Example Usage

The frontend application demonstrates how to use the shared package:

```typescript
import { User, ApiResponse, validateEmail, APP_NAME } from '@project-tool/shared';

// Use shared types
const user: User = {
  id: generateId(),
  name: 'John Doe',
  email: 'john@example.com',
  createdAt: new Date()
};

// Use shared utilities
if (validateEmail(user.email)) {
  console.log('Valid email');
}

// Use shared constants
console.log(`Welcome to ${APP_NAME}`);
```

## 🚀 Deployment

### Backend
```bash
pnpm --filter @project-tool/backend build
pnpm --filter @project-tool/backend start
```

### Frontend
```bash
pnpm --filter @project-tool/frontend build
# Serve the dist/ directory
```

## 🤝 Contributing

1. Make changes in the appropriate package
2. Update shared types/utilities if needed
3. Test changes across packages
4. Build and verify everything works

## 📄 License

MIT 