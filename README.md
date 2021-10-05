# node-postgres-server

A ready-to-use scalable `NodeJS`, `Express` and `PostgreSQL` monolith server boilerplate.

## Description

The objective of this boilerplate server is to be an out-of-the box solution for quickly getting a server up and running, that follows good design practices and scales easily.
It can be easily modified to suit any purposes and is very versatile that way.  

- The basic building block of the system is a *Unit* which can be made to represent anything depending on your use-case e.g. a Blog post, a Social Media item, eCommerce listing, stuff like that.  
- *Units* are associated with *Users* who create them.  
- More functionality can be added as needed.

It implements authentication, caching using redis, and basic CRUD operations on *Units* and *Users*.  
It does not use an ORM to connect to the database, so you'll need to write your own queries. ¯\\\_(ツ)_/¯

## Getting Started
- Start postgres with `sudo service postgresql start`.
- Clone the repository and `cd` into the installation directory. 
- Copy the scripts in *src/resources/schema.sql* and run them for your user to create the database tables. (will write a bash script to do this for you)
- Define environment variables in your `.env` file at the root folder as follows:
    ```
    DATABASE_NAME
    DATABASE_HOST
    DATABASE_PORT
    DATABASE_USER
    DATABASE_PASSWORD
    PORT
    ```
- Start server with the command `npm start`.

## API Endpoints

The server exposes the following endpoints:
- Units:
    - **GET /units/get-units** - get all units of logged-in user
    - **GET /units/get-unit/:unitId** - get units with the given ID
    - **POST /units/create-unit** - create a unit
        ```
        {
            "name": "testcreate",
            "details": "testcreate",
            "userId": 0   
        }
        ```
    - **PUT /units/update-unit/:unitId** - update unit with the given ID
        ```
        {
            "name": "testupdate",
            "details": "testupdate",
            "userId": 0   
        }
        ```
    - **DELETE /units/delete-unit/:unitId** - delete unit with the given ID

- Users:
    - **GET /get-user/:userId** - get details of user with the given ID
    - **GET /get-user-units/:userId/units** - get units of the user with the given ID
    - **PUT /update-user/:userId** - edit user with the given ID
    ```
    {
        "name": "testupdate",
        "email": "testupdate",
        "phone": "testupdate",
        "username": "testupdate",
        "password": "testupdate"
    }
    ```
    - **DELETE /delete-user/:userId** - delete user with the given ID

- Auth:
    - **POST /auth/register-user** - register new user
    - **POST /auth/confirm-user/:userId** - confirm user email
    - **POST /auth/login** - sign user in
    - **POST /auth/logout** - sign uer out



