/*

To run this file, we do the following in our Terminal:

1. Go to the directory of this sql file.

2. Get into our mysql console.

3. Run "source schema.sql"

*/

-- Create the database task_saver_db and specified it for use.
CREATE DATABASE wish_saver_db;
USE wish_saver_db

-- Create the table tasks.
CREATE TABLE wishes
(
id int NOT NULL AUTO_INCREMENT,
task varchar(255) NOT NULL,
PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO wishes (wish) VALUES ('Pick up milk.');
INSERT INTO wishes (wish) VALUES ('Mow the lawn.');
INSERT INTO wishes (wish) VALUES ('Call Shannon back.');
