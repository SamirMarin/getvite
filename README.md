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
