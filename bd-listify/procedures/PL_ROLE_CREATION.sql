USE BD_LISTIFY;

DROP PROCEDURE IF EXISTS PL_ROLE_CREATION;
DELIMITER $$

CREATE PROCEDURE PL_ROLE_CREATION (
    IN ROLE_NAME_IN VARCHAR(50),
    IN ROLE_DESCRIPTION_IN VARCHAR(255),
    OUT ID_RESULT_OUT INT,
    OUT ERROR_CODE_OUT VARCHAR(50),
    OUT ERROR_MESSAGE_OUT VARCHAR(200)
)

LABEL:BEGIN
    DECLARE P1 VARCHAR(100);
    DECLARE P2 VARCHAR(100);
    
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        GET DIAGNOSTICS CONDITION 1
        P1 = RETURNED_SQLSTATE, P2 = MESSAGE_TEXT;
        SET ERROR_CODE_OUT = 'PL-ROC-04';
        SET ERROR_MESSAGE_OUT = CONCAT(CONCAT('SQLSTATE: ',P1),CONCAT(' MESSAGE: ',P2));
        ROLLBACK;
    END;

    IF ROLE_NAME_IN IS NULL OR TRIM(ROLE_NAME_IN) = '' THEN 
        SET ERROR_CODE_OUT = 'PL_ROC_01';
        SELECT ER_DESCRIPTION FROM ERRORS WHERE ER_CODE = 'PL_ROC_01' INTO ERROR_MESSAGE_OUT;
        LEAVE LABEL;
    END IF;

    IF ROLE_DESCRIPTION_IN IS NULL OR TRIM(ROLE_DESCRIPTION_IN) = '' THEN 
        SET ERROR_CODE_OUT = 'PL_ROC_02';
        SELECT ER_DESCRIPTION FROM ERRORS WHERE ER_CODE = 'PL_ROC_02' INTO ERROR_MESSAGE_OUT;
        LEAVE LABEL;
    END IF;

    IF EXISTS (SELECT * FROM ROLES WHERE RO_NAME = ROLE_NAME_IN) THEN
        SET ERROR_CODE_OUT = 'PL_ROC_03';
        SELECT ER_DESCRIPTION FROM ERRORS WHERE ER_CODE = 'PL_ROC_03' INTO ERROR_MESSAGE_OUT;
        LEAVE LABEL;
    END IF;

    START TRANSACTION;
    INSERT INTO ROLES
        (
        `RO_NAME`,
        `RO_DETAIL`,
        `RO_ACTIVE`
        )
    VALUES(
        ROLE_NAME_IN,
        ROLE_DESCRIPTION_IN,
        TRUE
    );
    COMMIT;
    SELECT LAST_INSERT_ID() INTO ID_RESULT_OUT;
END$$

DELIMITER ;
