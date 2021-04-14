# CMS-WEB

web of project

## Installation

must install nodejs, npm, yarn, mongodb in your server and clone this project

```bash
yarn
```
before yarn start you should run mongodb server
```bash
mkdir your_folder
mongod your_folder

mongo
used  DB_NAME
use admin
db.createUser({
    user: “MONGO_ID”,
    pwd: “MONGO_PASSWORD”,
    roles:["dbAdminAnyDatabase"]
})
```
then
```bash
yarn start (nodemon app)
```

## Description
public - static folder in project(not in used)  
  
schemas - ORM models of MongoDB    
  
routes - routers of API  
  
utils - utils and setups of project  
  
passport - passports for login
  

## License
[MIT](https://choosealicense.com/licenses/mit/)
