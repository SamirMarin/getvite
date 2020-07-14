from flask import Flask, jsonify
import psycopg2
import psycopg2.errorcodes
import logging
from flask_cors import CORS
#import sys
#import os
#sys.path.append(os.getcwd())
from app_flask.controllers.Invitations import Invitations



app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})

books = [
    {'id': 0,
     'title': 'A Fire Upon the Deep',
     'author': 'Vernor Vinge',
     'first_sentence': 'The coldsleep itself was dreamless.',
     'year_published': '1992'},
    {'id': 1,
     'title': 'The Ones Who Walk Away From Omelas',
     'author': 'Ursula K. Le Guin',
     'first_sentence': 'With a clamor of bells that set the swallows soaring, the Festival of Summer came to the city Omelas, bright-towered by the sea.',
     'published': '1973'},
    {'id': 2,
     'title': 'Dhalgren',
     'author': 'Samuel R. Delany',
     'first_sentence': 'to wound the autumnal city.',
     'published': '1975'}
]

@app.route('/testDB')
def hello():
    dsn = 'postgresql://croach_node_1:26257/bank?sslmode=disable'
    conn = psycopg2.connect(dsn)
    with conn.cursor() as cur:
        cur.execute('CREATE DATABASE getvite;')
        logging.debug("create_db(): status message: {}".format(cur.statusmessage))
    conn.commit()
    return 'This is flask with docker after an update to app, test 3, reload cool, query to db check'

@app.route('/api/invitation/<admin_user>', methods=['GET'])
def get_invitation(admin_user):
    invitations = Invitations()
    invitation = invitations.get_invitation_by_admin_user_transaction(admin_user)
    #if len(invitations) > 1:
    #    return jsonify({"ERROR": "admin_user is not unique issue"})
    #else:
    return jsonify(invitation[0])
