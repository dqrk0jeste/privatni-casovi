-- @block
CREATE TABLE nastavnici (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  passwordHash VARCHAR(255) NOT NULL,
  ime VARCHAR(255) NOT NULL,
  prezime VARCHAR(255) NOT NULL,
  bio TEXT,
  napomena TEXT
);

-- @block 
DROP TABLE Nastavnici;

-- @block 
DROP TABLE Users;

-- @block
INSERT INTO nastavnici(username, passwordHash, ime, prezime,  bio, napomena)
VALUES ('dqrk0', '$2y$10$NQQBZHj97fgj8GwhWlItUeqvpX2p/8DjTLK3hPjLfhqsRkP09Lb3u', 'Дарко', 'Николић', '', 'Не учим за два и сличне фазоне!')