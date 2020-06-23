CREATE TABLE users (
id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
username VARCHAR,
user_password VARCHAR,
first_name VARCHAR,
last_name VARCHAR,
email VARCHAR
);

CREATE TABLE user_locations (
id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
user_id INT REFERENCES users (id) NOT NULL,
state VARCHAR,
city VARCHAR,
street_name VARCHAR,
street_number INT
);

CREATE TABLE event_types (
id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
event_type VARCHAR
);

CREATE TABLE events (
id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
event_type_id INT REFERENCES event_types (id) NOT NULL,
host_id INT REFERENCES users (id) NOT NULL,
title VARCHAR,
image VARCHAR,
price MONEY,
start_time TIMESTAMP,
max_people INT,
description VARCHAR
);

CREATE TABLE event_locations (
id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
event_id INT REFERENCES events (id) NOT NULL,
state VARCHAR,
city VARCHAR,
street_name VARCHAR,
street_number INT
);

CREATE TABLE user_events (
	user_id INT REFERENCES users (id),
	event_id INT REFERENCES events (id),
	PRIMARY KEY (user_id, event_id)
);

CREATE TABLE posts (
id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
user_id INT REFERENCES users (id) NOT NULL,
event_id INT REFERENCES events (id) NOT NULL,
post_content VARCHAR,
image VARCHAR,
creation_time TIMESTAMP
);

CREATE TABLE user_comments (
id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
user_id INT REFERENCES users (id) NOT NULL,
post_id  INT REFERENCES posts (id) NOT NULL,
comment_content VARCHAR,
image VARCHAR,
creation_time TIMESTAMP
);


INSERT INTO users (username, user_password , first_name, last_name, email) VALUES
('Kei2020', '$2b$10$3U1nowvIaZ6U5VuUioYWIeNdTnvkUbFTBVEggLYqFjriYJ64P2rFm', 'Kei', 'Keilson', 'Kei@Kei.com'),
('Mitch2020', '$2b$10$3U1nowvIaZ6U5VuUioYWIeNdTnvkUbFTBVEggLYqFjriYJ64P2rFm', 'Mitch', 'Mitchellson', 'Mitch@Mitch.com'); 

INSERT INTO user_locations (user_id, state, city, street_name, street_number ) VALUES
('1', 'New York', 'New York', 'first avenue', 2020);

INSERT INTO event_types (event_type) VALUES
('convention');

INSERT INTO events (event_type_id, host_id, title, image, price, start_time, max_people, description) VALUES
(1, 1, 'convention1', 'image1', 100, '1995-01-01', 500, 'animecon');

INSERT INTO event_locations (event_id, state, city, street_name, street_number ) VALUES
('1', 'California', 'Los Angeles', 'first avenue', 1001);

INSERT INTO user_events (user_id, event_id) VALUES
(2, 1);

INSERT INTO posts (user_id, event_id, post_content, image, creation_time) VALUES
(1, 1, 'I love this convention', 'image1','2020-01-01' );

INSERT INTO user_comments (user_id, post_id, comment_content, image, creation_time) VALUES
(2, 1, 'I love it too!', 'image1','2020-01-02' );


SELECT * FROM users;
SELECT * FROM events;
SELECT * FROM posts;
SELECT * FROM user_comments;
SELECT * FROM user_locations;
SELECT * FROM event_locations;
SELECT * FROM event_types;
SELECT * FROM user_events;


GRANT SELECT, UPDATE, INSERT, DELETE ON ALL TABLES IN SCHEMA public TO node_app_role;

DROP TABLE event_locations CASCADE;
DROP TABLE event_types CASCADE;
DROP TABLE events CASCADE;
DROP TABLE posts CASCADE;
DROP TABLE user_comments CASCADE;
DROP TABLE user_events CASCADE;
DROP TABLE user_locations CASCADE;
DROP TABLE users CASCADE;