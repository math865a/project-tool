# base node image
FROM node:19-alpine3.16 as base

# set for base and all layer that inherit from it
ENV NODE_ENV production

RUN npm install -g pnpm

# Install all node_modules, including dev dependencies
FROM base as deps

WORKDIR /app

# Copy workspace configuration
COPY ../../pnpm-workspace.yaml ./
COPY ../../pnpm-lock.yaml ./

# Copy package files
COPY package.json ./
COPY tsconfig*.json ./

# Install all dependencies (including dev dependencies)
RUN pnpm install --frozen-lockfile

# Build the app (keep dev dependencies for build)
FROM base as build

WORKDIR /app

# Copy workspace configuration
COPY ../../pnpm-workspace.yaml ./
COPY ../../pnpm-lock.yaml ./

# Copy all source code
COPY . .

# Copy node_modules from deps stage
COPY --from=deps /app/node_modules ./node_modules

# Build the gateway application
RUN pnpm run build gateway

# Setup production node_modules (after build is complete)
FROM base as production-deps

WORKDIR /app

# Copy workspace configuration
COPY ../../pnpm-workspace.yaml ./
COPY ../../pnpm-lock.yaml ./

# Copy package files
COPY package.json ./
COPY tsconfig*.json ./

# Copy node_modules from deps stage and prune
COPY --from=deps /app/node_modules ./node_modules
RUN pnpm prune --production

# Finally, build the production image with minimal footprint
FROM base

WORKDIR /app

# Copy production dependencies
COPY --from=production-deps --chown=node:node /app/node_modules ./node_modules

# Copy built application
COPY --from=build --chown=node:node /app/dist ./dist

# Copy package files for runtime
COPY package*.json ./

CMD ["pnpm", "run", "gateway:prod"]