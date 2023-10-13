# Makefile
.PHONY: build run up stop clean logs bash

# Docker-related variables
DOCKER_COMPOSE = docker-compose
DOCKERFILE = Dockerfile

# Build the Docker image
build:
	$(DOCKER_COMPOSE) build

# Run the Docker container
run:
	$(DOCKER_COMPOSE) up

# Build and run the Docker container
up:
	$(DOCKER_COMPOSE) up --build -d

# Stop and remove the Docker container
stop:
	$(DOCKER_COMPOSE) down

# Clean up Docker images and volumes
clean:
	$(DOCKER_COMPOSE) down -v --rmi all

# View the logs
logs:
	$(DOCKER_COMPOSE) logs --tail=100 -f $(c)

# Container bash
bash:
	$(DOCKER_COMPOSE) exec website sh
