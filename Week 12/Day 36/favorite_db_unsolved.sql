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
