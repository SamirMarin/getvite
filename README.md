This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to run this project locally

This project is inteded to be developed with docker.
Intalling docker locally is required to run this locally.

to start the app locally run:

`docker-compose up -d`

if new libraries where added to api run:

`docker-compose up -d --build`

to take a look at the logs:

`docker-compose logs -f`

to tear the containers down

`docker-compose down`

to tear down the database named volumes with containers

`docker-compose down --volumes`

to connect to cockroach sql

`docker exec -it croach_node_1 cockroach sql --insecure`


## ENVIRONMENT VARIABLES REQUIRED
`REACT_APP_OKTA_DOMAIN` ---> okta app domain required for login page to work, you can get this by signing up for the free okta dev account
`REACT_APP_OKTA_CLIENTID` ---> okta client id required for login page to work, you can get his by signing up for the free okta dev account

You can set these using a .env file
