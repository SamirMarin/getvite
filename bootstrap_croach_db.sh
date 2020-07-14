#!/bin/bash
docker exec -i croach_node_1 cockroach sql --insecure < getvite_api/DB/bootstrap_db.sql

# to open sql interactive on terminal run
#docker exec -it croach_node_1 cockroach sql --insecure
