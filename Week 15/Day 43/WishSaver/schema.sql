

-- Create the database task_saver_db and specified it for use.
DROP DATABASE IF EXISTS wish_saver_db;
CREATE DATABASE wish_saver_db;
USE wish_saver_db;

-- Create the table tasks.
CREATE TABLE wishes (
id int NOT NULL AUTO_INCREMENT,
wish varchar(255) NOT NULL,
PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO wishes (wish) VALUES ('To fly to the moon');
INSERT INTO wishes (wish) VALUES ('To own a yacht');
INSERT INTO wishes (wish) VALUES ('To race supercars');
