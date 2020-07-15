from flask import Flask, jsonify
import psycopg2
import psycopg2.errorcodes
import logging
from flask_cors import CORS
from app.controllers.Invitations import Invitations

app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})

@app.route('/api/invitation/<admin_user>', methods=['GET'])
def get_invitation(admin_user):
    invitations = Invitations()
    invitation = invitations.get_invitation_by_admin_user_transaction(admin_user)
    return jsonify(invitation[0])
