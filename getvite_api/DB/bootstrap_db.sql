DROP DATABASE IF EXISTS getvite;

CREATE USER IF NOT EXISTS getvite_user;
CREATE DATABASE IF NOT EXISTS getvite;

GRANT ALL ON DATABASE getvite TO getvite_user;

USE getvite;

CREATE TABLE IF NOT EXISTS invitations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  admin_user STRING UNIQUE NOT NULL,
  photo_url STRING
);

CREATE TABLE IF NOT EXISTS invitation_text (
  invitation_admin_user STRING REFERENCES invitations(admin_user) ON DELETE CASCADE, 
  text_id INT,
  text STRING,
  text_position INT,
  font_size STRING,
  PRIMARY KEY (invitation_admin_user, text_id)
);

INSERT INTO invitations(admin_user, photo_url) VALUES ('nair.nikkita@gmail.com', '/static/media/seattlekkitasamir.17abd868.jpg'), ('marin.samir@gmail.com', 'https://i.pinimg.com/originals/e3/de/50/e3de50b67837b2d583719ee4655075ad.jpg');
