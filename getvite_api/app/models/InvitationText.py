from sqlalchemy import Column, Integer, String, Unicode, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from app.models.Invitation import Invitation

Base = declarative_base()

class InvitationText(Base):
    __tablename__ = 'invitation_text'
    invitation_admin_user = Column(ForeignKey(Invitation.admin_user), primary_key=True)
    text_id = Column(String, primary_key=True)
    text = Column(String)
    text_position = Column(Integer)
    font_size = Column(String)

