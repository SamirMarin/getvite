# !/bin/bash

dependecy=$1
container_name="getvite_app_1"

if [ -z "$dependecy" ]
then
  echo "please call script with dependecy you like to add"
  echo "./install_react_dependency.sh {dependecy}"
elif [ "$2" = "--upgrade" ]
then
  echo "upgrading $dependecy"
  echo "running: yarn upgrade $dependecy, in docker container $container_name"
  docker exec $container_name yarn upgrade $dependecy
else
  echo "installing $dependecy"
  echo "running: yarn add $dependecy, in docker container $container_name"
  docker exec $container_name yarn add $dependecy
fi
