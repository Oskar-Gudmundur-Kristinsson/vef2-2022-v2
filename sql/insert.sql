-- Útfæra test gögn
TRUNCATE TABLE users;
INSERT INTO users (id, username, password, isAdmin) VALUES ('1', 'admin', 'password', true);
INSERT INTO users (id, username, password, isAdmin) VALUES ('2', 'ntoadmin', 'ssword', false);
