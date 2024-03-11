# Practice API Documentation

This documentation outlines the practice routes for the Passwords and Todos modules. These routes are designed for your technical assessment.

## Passwords Module

### 1. Get Passwords

#### Endpoint: `GET /passwords`

#### Description:

Retrieve a list of passwords from the password manager.

Passwords should be decrypted before being returned to the client. The decryption algorithm is not important for this assessment, but you should be able to demonstrate how you would encrypt and decrypt the passwords in a real-world scenario.

#### Query Parameters:

- **username** (optional): Filter passwords by username.
- **website** (optional): Filter passwords by website.
- **limit** (optional): Limit the number of passwords returned.
- **offset** (optional): Offset the start of the returned passwords.
- **sort** (optional): Sort the returned passwords by a field.

#### Response:

- **200 OK**: Successful retrieval of passwords.
  ```json
  [
  	{
  		"id": 1,
  		"username": "john_doe",
  		"password": "securepassword123",
  		"website": "example.com"
  	}
  	// Additional password objects
  ]
  ```

### 2. Add Password

#### Endpoint: `POST /passwords`

#### Description:

Add a new password to the password manager.

Passwords should be encrypted before being stored in the database. The encryption algorithm is not important for this assessment, but you should be able to demonstrate how you would encrypt and decrypt the passwords in a real-world scenario.

#### Request:

- **Body**: Password object
  ```json
  {
  	"username": "john_doe",
  	"password": "securepassword123",
  	"website": "example.com"
  }
  ```

#### Response:

- **201 Created**: Successful addition of password.
  ```json
  {
  	"id": 1,
  	"username": "john_doe",
  	"password": "securepassword123",
  	"website": "example.com"
  }
  ```

## Todos Module

### 1. Get Todos

#### Endpoint: `GET /todos`

#### Description:

Retrieve a list of todos from the todo manager.

#### Response:

- **200 OK**: Successful retrieval of todos.
  ```json
  [
  	{
  		"id": 1,
  		"title": "Buy groceries",
  		"completed": false
  	}
  	// Additional todo objects
  ]
  ```

### 2. Add Todo

#### Endpoint: `POST /todos`

#### Description:

Add a new todo to the todo manager.

#### Request:

- **Body**: Todo object
  ```json
  {
  	"title": "Buy groceries",
  	"completed": false
  }
  ```

#### Response:

- **201 Created**: Successful addition of todo.
  ```json
  {
  	"id": 1,
  	"title": "Buy groceries",
  	"completed": false
  }
  ```
