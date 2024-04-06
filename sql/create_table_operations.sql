CREATE TABLE Operations
(
 ID_Operations INT NOT NULL UNIQUE PRIMARY KEY, 
 ID_Container INT NOT NULL,
 OperationStartDate DATETIME,
 OperationEndDate DATETIME,
 OperationType VARCHAR,
 FIO VARCHAR,
 Place VARCHAR,
 FOREIGN KEY (ID_Container) REFERENCES Container(ID_Container)
);
