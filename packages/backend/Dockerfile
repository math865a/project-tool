FROM node:20-alpine

WORKDIR /app

# Copy workspace files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY packages/shared/package.json ./packages/shared/
COPY packages/backend/package.json ./packages/backend/

# Install dependencies
RUN npm install -g pnpm
RUN pnpm install

# Copy source code
COPY packages/shared ./packages/shared
COPY packages/backend ./packages/backend

# Build shared package
WORKDIR /app/packages/shared
RUN pnpm install typescript --save-dev
RUN pnpm build

# Start backend development server
WORKDIR /app/packages/backend
RUN pnpm install @nestjs/cli --save-dev
EXPOSE 5001
CMD ["pnpm", "start:dev"] 