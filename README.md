# task
NodeJS secure RESTFUL api
      A  secure RESTFUL api for NodeJS. This project includes user login, access control of objects, and encrypted hashing of passwords right out of the box!. after analyze the provided  database design, i found this is relational database and query and  complex query is needed, i think for  complex data query (sql database is best suited ).

     I have implemented using Sequelize ORM, because  Sequelize is a promise-based ORM for Node.js and io.js. It supports the dialects PostgreSQL, MySQL, MariaDB, SQLite and MSSQL and features solid transaction support, relations, read replication and more. For Development i have used SQLite, also mysql is configured in “config.js” file.

Api test has been implemented using chai and mocha -----  write npm test to test the api 

To start backend write  --------    npm start


API Endpoints

GET http://localhost:3000/api/users -------- to get all users
GET http://localhost:3000/api/companies ----- to get all Companies
GET http://localhost:3000/api/proposals ----- to get app proposals 
GET http://localhost:3000/api/jobs     ------ to get all jobs from App users
GET http://localhost:3000/api/jobs:id  ------ to get single job


POST http://localhost:3000/api/users -------- create  users
POST http://localhost:3000/api/companies ----- create Companies
POST http://localhost:3000/api/proposals -----  create  proposals 

