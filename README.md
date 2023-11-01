# express-sample-api
## Config
### .env
```
DB_HOST="your database host"
DB_USER="your database user"
DB_PASS="your database password"
DB_NAME="your database name"
PORT="port number"
```
## Database
Database was use mysql.
### Table
#### users table

|Field|Type|NULL|Key|Extra|
|------|----|-------|-------|-------|
|id|int|Not Null|Primary|auto_increment|
|name|varchar|Not Null|
|email|varchar|Not Null|

#### messages table (Unhandled)

|Field|Type|NULL|Key|Extra|
|------|----|-------|-------|-------|
|id|int|Not Null|Primary|auto_increment|
|user_id|int|Not Null|Multiple|
|name|varchar|Null|
|date|date|Null|

## API
### GET
* Get all users <br> **api/users**
* receives user information from userId <br> **api/users/:id**
### POST
* Insert user <br> **api/users**
### PUT
* Update user <br> **api/users/:id**
### DELETE
* Delete user <br> **api/users/:id**

## Execution steps
1. Install the package `$ npm i`
1. Start nodemon `$ npm start`
1. Open the URL.
    * Success. <br> 
        http://(your IP):(Port)
    * Fail. <br> 
        http://localhost:3000


