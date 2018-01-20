-- Drops the favorite_db if it exists currently --
DROP DATABASE IF EXISTS favorite_db;
-- Creates the "favorite_db" database --
CREATE DATABASE favorite_db;

USE favorite_db;
-- Make it so all of the following code will affect favorite_db --

-- Creates the table "favorite_foods" within favorite_db --
CREATE TABLE favorite_foods (
  -- Make a string column called "food" which cannot contain null --
  -- Make an numeric column called "score" --
food VARCHAR(30) not null,
score INTEGER(10)
);

CREATE TABLE favorite_songs (
  -- Make a string column called "song" which cannot contain null --
  -- Make a string column called "artist" --
  -- Make an integer column called "score" --
  song VARCHAR(30) NOT NULL,
  artist VARCHAR(30),
  score INTEGER(10)
);

CREATE TABLE favorite_movies (
movie VARCHAR(30) NOT NULL,
five_times BOOLEAN NOT NULL DEFAULT 0,
score INTEGER(10)
  -- Create a string column called "movie" which cannot be null --
  -- Create a boolean column called "five_times" that sets the default value to false if nothing is entered --
  -- Make an integer column called "score" --
);

INSERT INTO favorite_foods (food,score)
VALUES("Bob\'s Pizzas", 6);

INSERT INTO favorite_foods (food,score)
VALUES("Top Dog", 8);

INSERT INTO favorite_foods (food,score)
VALUES("Tasty Pot", 10);


INSERT INTO favorite_songs (song,artist,score)
VALUES("Fire Escape", "Andrew McMahon", 10);

INSERT INTO favorite_songs (song,artist,score)
VALUES("Closer", "Elephante", 7);

INSERT INTO favorite_songs (song,artist,score)
VALUES("Dead Man\'s Dollar", "Andrew McMahon", 8);

SELECT * FROM favorite_foods;
SELECT * FROM favorite_songs;

UPDATE favorite_songs SET song = "ABC", artist = "fake", score = "1" WHERE song='Closer';

SELECT * FROM favorite_songs;

DELETE FROM favorite_songs WHERE song='ABC';

SELECT * FROM favorite_songs;

CREATE TABLE pets(
id integer(10) AUTO_INCREMENT NOT NULL,
name VARCHAR(30) NOT NULL,
age INTEGER(10) NOT NULL,
PRIMARY KEY (id)
);

INSERT INTO pets (name,age)
VALUES('SID',10);

SELECT * FROM pets;


