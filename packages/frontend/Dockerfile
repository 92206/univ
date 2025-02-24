# Use the official Node.js image as a base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN npm install -g pnpm
RUN pnpm install

# Copy the rest of the application files
COPY . .

# Build the Next.js app
RUN pnpm build

# Expose the port the app will run on
EXPOSE 3000

# Command to run the Next.js app
CMD ["pnpm", "run" , "dev"]
