from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

class DatabaseConnection:
    def __init__(self, host, database, user, port, connect_args):
        self.host = host
        self.databse = database
        self.user = user
        self.port = port
        self.connect_args = connect_args

        engine = create_engine(
                'cockroachdb://{}@{}:{}/{}'.format(user, host, port, database),
                connect_args=connect_args,
                echo=True                  
                )

        self.sessionmaker = sessionmaker(bind=engine)
