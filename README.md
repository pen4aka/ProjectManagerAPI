# Product Management API

## Table of Contents
- [Requirements](#requirements)
  - [CRUD Operations](#crud-operations)
  - [User Authentication](#user-authentication)
  - [Ownership of Products](#ownership-of-products)
  - [Docker and PostgreSQL Setup](#docker-and-postgresql-setup)
  - [Project Documentation](#project-documentation)
- [Submitting Results](#submitting-results)
  - [Estimate](#estimate)
  - [Submitting Your Code](#submitting-your-code)

## Requirements

### CRUD Operations

#### Products
- Implement CRUD operations for products.
- Each product should have the following fields:
  - **Id**
  - **Name** (unique)
  - **Description**
  - **Price**
  - **Stock**
  - **Category** (relation to Category entity)

#### Categories
- Implement CRUD operations for categories.
- Each category should have the following fields:
  - **Id**
  - **Name**
  - **Description**

### User Authentication

- The system should have a User entity with:
  - **Email** (unique)
  - **Password**

#### Seeded Users
- Add two test users:
  - Email: `test@mail.com`, Password: `password`
  - Email: `test2@mail.com`, Password: `password`

- Implement JWT authentication. Authentication should be required for the following operations:
  - Creating a product
  - Editing a product
  - Deleting a product

### Ownership of Products

- A user can only edit or delete the products they created.
- There should be an endpoint to list all products created by the currently authenticated user.
- Additionally, an endpoint should allow listing products filtered by a given category Id.

### Docker and PostgreSQL Setup

- Provide a `Dockerfile` for the NestJS app and `docker-compose.yml` to run both the backend API and PostgreSQL database.
- The setup should support easy environment configuration.

### Project Documentation

- Replace the README with instructions for setting up and running the project.
- The README should also contain API documentation, including:
  - All available endpoints
  - Request/response formats
  - Authentication requirements

## Submitting Results

### Estimate
After reading the requirements, please provide an estimate for the time it will take you to complete the exercise.

### Submitting Your Code
Fork the repository, write your code, then make a pull request and add `S-Hristov` as a reviewer.
