DROP DATABASE IF EXISTS quiz_db;

CREATE database quiz_db;

USE quiz_db;

CREATE table pop(
id INTEGER(30) NOT NULL auto_increment,
Name VARCHAR(30) NOT NULL,
Filler VARCHAR(30) NOT NULL,
Value INTEGER(30) NOT NULL,
PRIMARY KEY (id)
);


INSERT INTO pop (Name,Filler,Value)
VALUES("Apple", "blah", 5);

INSERT INTO pop (Name,Filler,Value)
VALUES("banana", "blahs", 10);

INSERT INTO pop (Name,Filler,Value)
VALUES("cantaloupe", "blahss", 15);

SELECT * from pop;

