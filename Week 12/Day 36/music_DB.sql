DROP DATABASE if exists music_DB;

CREATE database music_DB; 

USE music_DB;

CREATE table songs(
Id INTEGER NOT NULL auto_increment,
Title VARCHAR(50) NOT NULL,
Artist VARCHAR(50) NOT NULL,
Genre VARCHAR(50) NOT NULL,
PRIMARY KEY (Id)
);



INSERT INTO songs (Title, Artist, Genre)
VALUE ("Fire Escape", "Andrew McMahon in the Wilderness", "Alternative");

INSERT INTO songs (Title, Artist, Genre)
VALUE ("Fresh Static Snow", "Porter Robinson", "Electronic");

INSERT INTO songs (Title, Artist, Genre)
VALUE ("So Close", "Andrew McMahon in the Wilderness", "Alternative");

INSERT INTO songs (Title, Artist, Genre)
VALUE ("Dead Man\'s Dollar", "Andrew McMahon in the Wilderness", "Alternative");

INSERT INTO songs (Title, Artist, Genre)
VALUES ("Human", "Krewella", "Dance");

INSERT INTO songs (Title, Artist, Genre)
VALUES ("TRNDSTTR","Black Coast", "Dance");

INSERT INTO songs (Title, Artist, Genre)
VALUES ("Whos Next", "The Who", "Classic Rock");

INSERT INTO songs (Title, Artist, Genre)
VALUES ("Yellow Submarine", "The Beatles", "Classic Rock");

SELECT * from songs; 
