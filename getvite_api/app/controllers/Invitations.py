from app.models.DatabaseConnection import DatabaseConnection
from app.models.Invitation import Invitation
from app.models.InvitationText import InvitationText
from cockroachdb.sqlalchemy import run_transaction
import uuid

class Invitations:
    def __init__(self):
        #insecure connection
        connect_args = {'sslmode': 'disable'}
        dbconnection = DatabaseConnection('croach_node_1', 'getvite', 'getvite_user', '26257', connect_args)
        self.sessionmaker = dbconnection.sessionmaker

    def get_invitation_by_admin_user(self, session, user):
        invitation_text_query_array = session.query(InvitationText).filter(InvitationText.invitation_admin_user==user).all()
        size = len(invitation_text_query_array)
        invitation_text = []
        for invitation_text_row in invitation_text_query_array:
            invitation_text.append({
                    "text": invitation_text_row.text,
                    "position": invitation_text_row.text_position,
                    "fontSize": invitation_text_row.font_size
                    })

        invitations = []
        for invitation in session.query(Invitation).filter(Invitation.admin_user==user).all():
            invitation_dict = {
                    "user": invitation.admin_user,
                    "photo": invitation.photo_url,
                    "text": invitation_text
                    }
            invitations.append(invitation_dict)

        return invitations

    def get_invitation_by_admin_user_transaction(self, user):
        invitations =  run_transaction(self.sessionmaker, lambda s: self.get_invitation_by_admin_user(s, user))
        return invitations

    def save_invitation_text(self, session, user, invitation_text):
        invitation_text_to_save = []
        count = 0
        print(invitation_text)
        for invitation_text_row in invitation_text:
            if invitation_text_row['isDeleted']:
                updated = session.query(InvitationText).\
                        filter(InvitationText.invitation_admin_user==user).\
                        filter(InvitationText.text_id==count).\
                        delete(synchronize_session=False)
            else:
                updated = session.query(InvitationText).\
                        filter(InvitationText.invitation_admin_user==user).\
                        filter(InvitationText.text_id==count).\
                        update({
                            'text': invitation_text_row['text'],
                            'text_position': invitation_text_row['position'],
                            'font_size': invitation_text_row['fontSize']
                            })
            if updated == 0:
                invitation_text_to_save.append(
                        InvitationText(
                            invitation_admin_user=user,
                            text_id=count,
                            text=invitation_text_row['text'],
                            text_position=invitation_text_row['position'],
                            font_size=invitation_text_row['fontSize']
                            )
                        )
            count += 1
        session.add_all(invitation_text_to_save)

    def save_invitation_text_transaction(self, user, invitation_text):
        save_invitation_text_response = run_transaction(self.sessionmaker, lambda s: self.save_invitation_text(s, user, invitation_text))
        return save_invitation_text_response





