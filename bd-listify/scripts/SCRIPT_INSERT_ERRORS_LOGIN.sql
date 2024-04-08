USE BD_LISTIFY;

INSERT INTO `ERRORS` 
(ER_CODE,
ER_DESCRIPTION)
VALUES('PL_LOG_01',
'email cannot be null');

INSERT INTO `ERRORS` 
(ER_CODE,
ER_DESCRIPTION)
VALUES('PL_LOG_02',
'password cannot be null');

INSERT INTO `ERRORS` 
(ER_CODE,
ER_DESCRIPTION)
VALUES('PL_LOG_03',
'the entered email does not exist');

INSERT INTO `ERRORS` 
(ER_CODE,
ER_DESCRIPTION)
VALUES('PL_LOG_04',
'The entered email or password is not valid');

INSERT INTO `ERRORS` 
(ER_CODE,
ER_DESCRIPTION)
VALUES('PL_LOG_05',
'An unexpected error occurred. The PL_LOGIN procedure has terminated');
