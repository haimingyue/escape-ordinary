# Stage 1: Build the Nuxt application
FROM node:25.2.1 AS build
WORKDIR /app
RUN corepack enable # Enables pnpm, yarn, etc.
COPY package.json pnpm-lock.yaml* .npmrc ./ # Copy package and lock files
RUN pnpm install --frozen-lockfile # Install dependencies

COPY . . # Copy the rest of the application files
RUN pnpm build # Build the application for production

# Stage 2: Run the production application
FROM node:25.2.1 AS runtime
WORKDIR /app
COPY --from=build /app/.output ./.output # Copy built files from the build stage
COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --frozen-lockfile --prod # Install production dependencies only

# Set environment variable to make the server listen on all network interfaces
ENV HOST 0.0.0.0
EXPOSE 3000

CMD ["pnpm", "start"]