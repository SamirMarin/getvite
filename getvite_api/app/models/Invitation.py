from sqlalchemy import Column, Integer, String, Unicode
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Invitation(Base):
    __tablename__ = 'invitations'
    id = Column(Unicode, primary_key=True)
    admin_user = Column(String)
    photo_url = Column(String)

