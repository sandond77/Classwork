CREATE DATABASE animals_db;

USE animals_db;

CREATE TABLE people(
	name VARCHAR(30) NOT NULL,
    has_pet BOOLEAN NOT NULL,
    pet_name VARCHAR(30),
    pet_age integer(10) 
    );
    
SELECT * from people;