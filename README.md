# express-sample-api
## Database
The database was used mysql
### DatabaseName 
* sample_api
### Table
#### users table

|Field|Type|NULL|Key|Extra|
|------|----|-------|-------|-------|
|id|int|Not Null|Primary|auto_increment|
|name|varchar|Not Null|
|email|varchar|Not Null|

#### messages table

|Field|Type|NULL|Key|Extra|
|------|----|-------|-------|-------|
|id|int|Not Null|Primary|auto_increment|
|user_id|int|Not Null|Multiple|
|name|varchar|Null|
|date|date|Null|
