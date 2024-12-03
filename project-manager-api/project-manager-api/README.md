## Description

[Nest](https://github.com/pen4aka/Stamsoft-Backend-Interview/tree/Project) - project repository

## Project setup

Clone the repository:
```bash
$ git clone https://github.com/pen4aka/Stamsoft-Backend-Interview/tree/Project.git
cd Project
```
Install dependencies:

```bash
$ npm install
```
Install the NestJS CLI globally (if not already installed):

```bash
npm install -g @nestjs/cli
```

Set up environment variables:
Create a .env file in the root directory and add the required variables (see Environment Variables).

## Compile and run the project

```bash
# development
$ npm run start
```

```bash
# watch mode
$ npm run start:dev
```

```bash
# production mode

# Build the application:
$ npm run build

# Start the production build:
$ npm run start:prod
```
#### API Documentation



## Authentication Requirements : 
-Most Product endpoints require authentication via a JWT token. Include the token in the Authorization header - in this case in Postman/Swagger:

This project uses **Swagger**. With Swagger you can - test, and interact with all the API endpoints directly in your browser.

### **How to Access Swagger**

1. Start the application:
Open your browser and navigate to: - http://localhost:3000/api (Enjoy)

# JWT Authentication

{
  "Authorization": "Bearer <jwt-token>"
}

#### Endpoints

# Endpoints for PRODUCTS -

@POST /products
Create a new product.
Request:
{
  "name": "Product Name",
  "description": "Product Description",
  "price": 100,
  "categoryId": 1
}
Response:
{
  "id": 1,
  "name": "Product Name",
  "description": "Product Description",
  "price": 100,
  "categoryId": 1
}

@PATCH /products/:id
Update an existing product.
Request:
{
  "name": "Updated Product Name",
  "price": 120
}
Response:
{
  "id": 1,
  "name": "Updated Product Name",
  "description": "Product Description",
  "price": 120,
  "categoryId": 1
}

@DELETE /products/:id
Delete a product.
Response:
{
  "message": "Product deleted successfully"
}
GET /products
Retrieve all products.
Response:
[
  {
    "id": 1,
    "name": "Product A",
    "description": "Description of Product A",
    "price": 100,
    "categoryId": 1
  }
]
# Endpoints for CATEGORIES

@POST /categories
Create a new category.
Request:
{
  "name": "Category Name",
  "description": "Category Description"
}
Response:
{
  "id": 1,
  "name": "Category Name",
  "description": "Category Description"
}

@GET /categories
Retrieve all categories.
Response:
[
  {
    "id": 1,
    "name": "Category A",
    "description": "Description of Category A"
  }
]

# Endpoints for Authentication

@POST /auth/register
Register a new user.
Request:
{
  "email": "user@example.com",
  "password": "examplepassword"
}
Response:
{
  "message": "User registered successfully",
  "user": {
    "id": 1,
    "email": "user@example.com"
  }
}

@POST /auth/login
Authenticate and retrieve a JWT token.
Request:
{
  "email": "user@example.com",
  "password": "examplepassword"
}
Response:
{
  "access_token": "<jwt-token>"
}

#### Docker Configuration

# Config
Dockerfile
Create a Dockerfile in the root of your project (See Dockerfile)

docker-compose.yml
Create a docker-compose.yml file for defining the application and database services (See docker-compose.yml)

# Running the Application with Docker
Build and Start Containers - 
```bash
docker-compose up --build
```

Stop Containers -
```bash
docker-compose down
```

## Resources

- Github
- StackOverFlow
- Google

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
