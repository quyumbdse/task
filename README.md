# task
NodeJS secure RESTFUL api
      A  secure RESTFUL api for NodeJS. This project includes user login, access control of objects, and encrypted hashing of passwords right out of the box!

Api test has been implemented using chai and mocha -----  write npm test to test the api 

To start backend write  --------    npm start

Application Structure

bin/ - This folder contains server creation and connect with express environment.

config/ - This folder contains configuration for configuration/environment variables.

controllers/ - This folder contains all business logic for API.

models/ - This folder contains the schema definitions for our Sequelize models.

routes/ - This folder contains the route definitions for our API.

middleware/ -This folder contains jwt authentication process.

test/ - This folder contains API Test 




API Endpoints

GET http://localhost:3000/api/users -------- to get all users


GET http://localhost:3000/api/companies ----- to get all Companies

GET http://localhost:3000/api/proposals ----- to get app proposals 

GET http://localhost:3000/api/jobs     ------ to get all jobs from App users

GET http://localhost:3000/api/jobs:id  ------ to get single job


POST http://localhost:3000/api/users -------- create  users

POST http://localhost:3000/api/companies ----- create Companies

POST http://localhost:3000/api/proposals -----  create  proposals 


