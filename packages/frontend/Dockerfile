# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy workspace files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY packages/shared/package.json ./packages/shared/
COPY packages/frontend/package.json ./packages/frontend/

# Install dependencies
RUN npm install -g pnpm
RUN pnpm install

# Copy source code
COPY packages/shared ./packages/shared
COPY packages/frontend ./packages/frontend

# Build shared package
WORKDIR /app/packages/shared
RUN pnpm install typescript --save-dev
RUN pnpm build

# Development stage
FROM node:20-alpine

WORKDIR /app

# Copy workspace files and dependencies from builder
COPY --from=builder /app/package.json /app/pnpm-lock.yaml /app/pnpm-workspace.yaml ./
COPY --from=builder /app/packages/shared /app/packages/shared
COPY --from=builder /app/packages/frontend /app/packages/frontend

# Install pnpm globally
RUN npm install -g pnpm

# Install dependencies in the development stage
RUN pnpm install

# Set working directory to frontend
WORKDIR /app/packages/frontend

# Expose port
EXPOSE 5173

# Start development server
CMD ["pnpm", "dev", "--host", "0.0.0.0"]