# Build Stage
FROM node:16-buster-slim AS umbrel-fulcrum-builder

# Install tools
# RUN apt-get update \
#     && apt-get install -y build-essential \
#     && apt-get install -y python3

# Create app directory
WORKDIR /app

# Copy 'package-lock.json' and 'package.json'
COPY yarn.lock package.json ./
COPY apps ./apps

# Install dependencies
RUN yarn install

# Copy project files and folders to the current working directory (i.e. '/app')
COPY . .

RUN yarn build:frontend

# Final image
FROM node:16-buster-slim AS umbrel-electrs

# Copy built code from build stage to '/app' directory
COPY --from=umbrel-fulcrum-builder /app /app

# Change directory to '/app' 
WORKDIR /app

EXPOSE 3006
CMD [ "npm", "run", "dev:backend" ]
