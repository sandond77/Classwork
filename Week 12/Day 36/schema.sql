DROP DATABASE IF EXISTS top_songsDB;

CREATE DATABASE top_songsDB;

USE top_songsDB;

CREATE table top5000(
id INTEGER(255) NOT NULL auto_increment,
Artist VARCHAR(100) NOT NULL,
Songs VARCHAR(100) NOT NULL,
Release_Year INTEGER (5) NOT NULL,
ScoreWorld FLOAT,
ScoreUSA FLOAT,
ScoreUK FLOAT,
ScoreEurope FLOAT,
ScoreROWorld FLOAT,
PRIMARY KEY (id)
);


SELECT Artist FROM top5000 WHERE Songs='Crazy';