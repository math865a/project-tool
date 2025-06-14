# HR Scheduling App

A modern HR scheduling application built with NestJS and React.

## Project Structure

This is a monorepo containing three packages:

- `packages/shared`: Shared TypeScript types and utilities
- `packages/backend`: NestJS backend application
- `packages/frontend`: Vite React frontend application

## Prerequisites

- Node.js (v18 or later)
- pnpm (v8 or later)

## Setup

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Build shared package:
   ```bash
   pnpm --filter @hr-scheduling/shared build
   ```

## Development

To start the development servers:

1. Start the backend:
   ```bash
   pnpm dev:backend
   ```

2. Start the frontend:
   ```bash
   pnpm dev:frontend
   ```

The backend will be available at `http://localhost:3000` and the frontend at `http://localhost:5173`.

## Building for Production

To build all packages for production:

```bash
pnpm build
```

## Available Scripts

- `pnpm dev:frontend`: Start the frontend development server
- `pnpm dev:backend`: Start the backend development server
- `pnpm build`: Build all packages
- `pnpm test`: Run tests for all packages 