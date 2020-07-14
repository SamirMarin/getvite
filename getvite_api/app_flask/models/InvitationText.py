from sqlalchemy import Column, Integer, String, Unicode, ForeignKey
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class InvitationText(Base):
    __tablename__ = 'invitation_text'
    id = Column(Unicode, primary_key=True)
    invitation_admin_user = Column(ForeignKey('invitations.admin_user'))
    text_id = Column(String)
    text = Column(String)
    text_position = Column(Integer)
    font_size = Colomn(String)

