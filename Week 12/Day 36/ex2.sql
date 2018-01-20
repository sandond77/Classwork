DROP DATABASE IF EXISTS programming_db;

CREATE database programming_db;

USE programming_db;

CREATE table programming_languages(
id INTEGER NOT NULL AUTO_INCREMENT,
languages VARCHAR(30) NOT NULL,
rating INTEGER(10) NOT NULL,
PRIMARY KEY (id)
);

INSERT INTO programming_languages(languages,rating)
VALUES('java', 1);

INSERT INTO programming_languages(languages,rating)
VALUES('javascript',10);

INSERT INTO programming_languages(id,languages,rating)
VALUES(5,'HTML5',6);

INSERT INTO programming_languages(languages,rating)
VALUES('CSS',3);

SELECT * FROM programming_languages;

ALTER TABLE programming_languages ADD mastered BOOLEAN NOT NULL DEFAULT 1;

SELECT * FROM programming_languages;

UPDATE programming_languages SET id=1111, mastered=FALSE WHERE languages = 'CSS';

SELECT * FROM programming_languages;