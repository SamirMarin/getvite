from flask import Flask
import psycopg2
import psycopg2.errorcodes
import logging

app = Flask(__name__)

@app.route('/')
def hello():
    dsn = 'postgresql://croach_node_1:26257/bank?sslmode=disable'
    conn = psycopg2.connect(dsn)
    with conn.cursor() as cur:
        cur.execute('CREATE DATABASE getvite;')
        logging.debug("create_db(): status message: {}".format(cur.statusmessage))
    conn.commit()
    return 'This is flask with docker after an update to app, test 3, reload cool, query to db check'
