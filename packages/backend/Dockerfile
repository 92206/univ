# Use official Node.js image
FROM node:20-alpine

# Set working directory to match the Compose volume mount
WORKDIR /app

# Enable Corepack for pnpm
RUN npm i -g pnpm 

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile
    
# Copy the rest of the code
COPY . .

# Expose port
EXPOSE 8080

# Start the app
CMD ["pnpm", "run", "start"]