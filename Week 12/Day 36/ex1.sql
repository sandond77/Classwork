DROP DATABASE IF EXISTS animals_db;

CREATE DATABASE animals_db;

USE animals_db;

SET SQL_SAFE_UPDATES = 0;

CREATE TABLE people(
	name VARCHAR(30) NOT NULL,
    has_pet BOOLEAN NOT NULL,
    pet_name VARCHAR(30),
    pet_age integer(10) 
    );
    
SELECT * from people;

INSERT INTO people(name, has_pet, pet_name, pet_age)
VALUES("big dog", false , "0", '0');

INSERT INTO people(name, has_pet, pet_name, pet_age)
VALUES("Jennifer", true , "Rocky", '4');

INSERT INTO people(name, has_pet)
VALUES("Casey", true);

UPDATE people SET has_pet = false WHERE name='Casey';


UPDATE people SET has_pet = true, pet_name = "bob", pet_age = "5" WHERE name='Casey';

SELECT * from people;

ALTER TABLE people ADD id INTEGER(10) NOT NULL auto_increment FIRST,
ADD PRIMARY KEY(id);

SELECT * from people;

INSERT into PEOPLE (id, name, has_pet)
VALUE(3, "bob", false);

SELECT * from people;

INSERT into PEOPLE (id, name, has_pet)
VALUE(10, "bob", false);

SELECT * from people;

INSERT into PEOPLE (name, has_pet)
VALUE("dave", false);

SELECT * from people;