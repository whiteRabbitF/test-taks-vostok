CREATE TABLE Container
(
 ID_Container INT NOT NULL UNIQUE PRIMARY KEY, 
 Number INT,
 Type VARCHAR,
 Long INT,
 Width INT,
 Height INT,
 Weight INT,
 IsEmpty BOOLEAN,
 DateOFGetting DATETIME
);



