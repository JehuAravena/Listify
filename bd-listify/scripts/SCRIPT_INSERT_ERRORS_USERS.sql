USE BD_LISTIFY;

-- ------------------------------------------------------------------------------
-- CREATE USER ERRORS
-- ------------------------------------------------------------------------------

INSERT INTO `ERRORS` 
(ER_CODE, 
ER_DESCRIPTION) 
VALUES ('PL_USC_01', 
"You must enter the user's name");

INSERT INTO `ERRORS`
(ER_CODE,
ER_DESCRIPTION)
VALUES ('PL_USC_02',
"You must enter the user's nickname");

INSERT INTO `ERRORS`
(ER_CODE,
ER_DESCRIPTION)
VALUES ('PL_USC_03',
"You must enter the user's last name");

INSERT INTO `ERRORS`
(ER_CODE,
ER_DESCRIPTION)
VALUES ('PL_USC_04',
"You must enter the user's email");

INSERT INTO `ERRORS`
(ER_CODE,
ER_DESCRIPTION)
VALUES ('PL_USC_05',
"You must enter the user's password");

INSERT INTO `ERRORS`
(ER_CODE,
ER_DESCRIPTION)
VALUES ('PL_USC_06',
"You must enter the user's role ID");

INSERT INTO `ERRORS`
(ER_CODE,
ER_DESCRIPTION)
VALUES ('PL_USC_07',
"The user's nickname already exists");

INSERT INTO `ERRORS`
(ER_CODE,
ER_DESCRIPTION)
VALUES ('PL_USC_08',
"The user's email already exists");

INSERT INTO `ERRORS`
(ER_CODE,
ER_DESCRIPTION)
VALUES ('PL_USC_09',
"The user's role ID does not exist");

INSERT INTO `ERRORS`
(ER_CODE,
ER_DESCRIPTION)
VALUES ('PL_USC_10',
"An unexpected error occurred, the PL_USER_CREATION procedure has terminated");

-- ------------------------------------------------------------------------------
-- UPDATE USER ERRORS
-- ------------------------------------------------------------------------------

INSERT INTO `ERRORS`
(ER_CODE,
ER_DESCRIPTION)
VALUES ('PL_USU_01',
"The user ID field cannot be null");

INSERT INTO `ERRORS`
(ER_CODE,
ER_DESCRIPTION)
VALUES ('PL_USU_02',
"User ID not found");

INSERT INTO `ERRORS`
(ER_CODE,
ER_DESCRIPTION)
VALUES ('PL_USU_03',
"The user's nickname already exists");

INSERT INTO `ERRORS`
(ER_CODE,
ER_DESCRIPTION)
VALUES ('PL_USU_04',
"The user's email already exists");

INSERT INTO `ERRORS`
(ER_CODE,
ER_DESCRIPTION)
VALUES ('PL_USU_05',
"The user's role ID does not exist");

INSERT INTO `ERRORS`
(ER_CODE,
ER_DESCRIPTION)
VALUES ('PL_USU_06',
"Cannot modify the user with ID 1 and/or 2");

INSERT INTO `ERRORS`
(ER_CODE,
ER_DESCRIPTION)
VALUES ('PL_USU_07',
"An unexpected error occurred, the PL_USER_UPDATE procedure has terminated");

-- ------------------------------------------------------------------------------
-- DELETE USER ERRORS
-- ------------------------------------------------------------------------------

INSERT INTO `ERRORS` 
(ER_CODE, 
ER_DESCRIPTION) 
VALUES('PL_USD_01', 
"The user ID field cannot be null");

INSERT INTO `ERRORS` 
(ER_CODE, 
ER_DESCRIPTION) 
VALUES('PL_USD_02', 
"User ID not found");

INSERT INTO `ERRORS` 
(ER_CODE, 
ER_DESCRIPTION) 
VALUES('PL_USD_03', 
"Cannot delete the user with ID 1 or 2");

INSERT INTO `ERRORS` 
(ER_CODE, 
ER_DESCRIPTION) 
VALUES('PL_USD_04', 
"An unexpected error occurred, the PL_USER_DELETE procedure has terminated");
