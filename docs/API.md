# API Documentation

## Create Pet
Endpoint: POST /pets

Creates a new pet in the database.

### Request Body
- name: String (required)
- breed: String (required)
- age: Number (required)

### Response
- 201 Created: Pet created successfully
- 500 Internal Server Error: Error occurred during pet creation
