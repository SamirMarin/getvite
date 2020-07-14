import sys
import os
sys.path.append(os.getcwd())
from app_flask.models.DatabaseConnection import DatabaseConnection
from app_flask.models.Invitation import Invitation
from cockroachdb.sqlalchemy import run_transaction


class Invitations:
    def __init__(self):
        #insecure connection
        connect_args = {'sslmode': 'disable'}
        dbconnection = DatabaseConnection('croach_node_1', 'getvite', 'getvite_user', '26257', connect_args)
        self.sessionmaker = dbconnection.sessionmaker


    def get_invitation_by_admin_user(self, session, user):
        invitations = []
        for invitation in session.query(Invitation).filter(Invitation.admin_user==user).all():
            invitation_dict = {
                    "user": invitation.admin_user,
                    "photo": invitation.photo_url
                    }
            invitations.append(invitation_dict)

        return invitations

        #return session.query(Invitation).filter(Invitation.admin_user==user).all()



    def get_invitation_by_admin_user_transaction(self, user):
        invitations =  run_transaction(self.sessionmaker, lambda s: self.get_invitation_by_admin_user(s, user))
        return invitations


print(sys.path)
invitations = Invitations()
invitation = invitations.get_invitation_by_admin_user_transaction("Petee")
print(invitation)
