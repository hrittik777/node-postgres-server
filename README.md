# node-postgres-server

A ready-to-use minimalistic server powered by `NodeJS`, `Express` and `PostgreSQL`.

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
    - **GET /units**: get all units of logged-in user
    - **GET /units?name=<some_string>**: get all units with matching names
    - **GET /unit/<unit_id>**: get units with the given ID
    - **POST /unit**: create a unit
        ```
        {
            "name": "testcreate",
            "details": "testcreate",
            "userId": 0   
        }
        ```
    - **PUT /unit/<unit_id>**: update unit with the given ID
        ```
        {
            "name": "testupdate",
            "details": "testupdate",
            "userId": 0   
        }
        ```
    - **DELETE /unit/<unit_id>**: delete unit with the given ID

- Users:
    - **GET /user/<user_id>**: get details of user with the given ID
    - **GET /user/<user_id>/units**: get units of the user with the given ID
    - **PUT /user/<user_id>**: edit user with the given ID
    ```
    {
        "name": "testupdate",
        "email": "testupdate",
        "phone": "testupdate",
        "username": "testupdate",
        "password": "testupdate"
    }
    ```
    - **DELETE /user/<user_id>**: delete user with the given ID

- Auth:
    - **POST /register**: register new user
    - **POST /confirm/<user_id>**: confirm user email
    - **POST /login**: sign user in
    - **POST /logout**: sign uer out



