# Use Node.js 20 LTS (compatible with Angular 21)
FROM node:20-alpine

# Install pnpm globally
RUN npm install -g pnpm

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build the application
RUN pnpm build

# Expose port 4000 (default for Angular SSR)
EXPOSE 4000

# Start the SSR server
CMD ["node", "dist/sitio-web/server/server.mjs"]