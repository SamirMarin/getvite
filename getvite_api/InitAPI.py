from flask import Flask, jsonify, request
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

@app.route('/api/invitationTexts/<admin_user>', methods=['POST'])
def save_invitation_text(admin_user):
    if not request.json or not 'texts' in request.json:
        abort(400)
    texts_array = request.json['texts']
    app.logger.info(texts_array)
    # create invitations controller
    invitations = Invitations()
    save_invitation_text_res = invitations.save_invitation_text_transaction(admin_user, texts_array)
    app.logger.info(save_invitation_text_res)
    return jsonify("true")

