SELECT '[' +
    STUFF((
        SELECT ',{"ID_Container":' + CAST(ID_Container AS VARCHAR(10)) + 
               ',"Number":' + CAST(Number AS VARCHAR(10)) + 
               ',"Type":"' + Type + '"' +
               ',"Long":' + CAST(Long AS VARCHAR(10)) + 
               ',"Width":' + CAST(Width AS VARCHAR(10)) + 
               ',"Height":' + CAST(Height AS VARCHAR(10)) + 
               ',"Weight":' + CAST(Weight AS VARCHAR(10)) + 
               ',"IsEmpty":' + CASE WHEN IsEmpty = 1 THEN 'true' ELSE 'false' END + 
               ',"DateOFGetting":"' + CONVERT(VARCHAR, DateOFGetting, 126) + '"'
        FROM 
            Container
        FOR XML PATH(''), TYPE
    ).value('.', 'VARCHAR(MAX)'), 1, 1, '') +
        ']' 
        AS Container_JSON;


SELECT 
    CONCAT(
        '{',
        '"ID_Operations": ', ID_Operations, ', ',
        '"ID_Container": ', ID_Container, ', ',
        '"OperationStartDate": "', OperationStartDate, '", ',
        '"OperationEndDate": "', OperationEndDate, '", ',
        '"OperationType": "', OperationType, '", ',
        '"FIO": "', FIO, '", ',
        '"Place": "', Place, '"',
        '}'
    ) AS Operation_JSON
FROM 
    Operations
WHERE 
    ID_Container = "ДАННЫЕ"; 
    -- так как не указано в задании айди определенного контейнера