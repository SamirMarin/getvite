#!/bin/bash
docker exec -i croach_node_1 cockroach sql --insecure < getvite_api/DB/drop_db.sql

# to drop existing database
