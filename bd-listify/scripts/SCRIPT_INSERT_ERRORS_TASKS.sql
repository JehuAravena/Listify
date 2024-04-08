USE BD_LISTIFY;

-- CREATE TASK ERRORS

INSERT INTO `ERRORS`
(ER_CODE,
ER_DESCRIPTION)
VALUES('PL_TAC_01',
'The task name field cannot be null');

INSERT INTO `ERRORS`
(ER_CODE,
ER_DESCRIPTION)
VALUES('PL_TAC_02',
'The priority field cannot be null');

INSERT INTO `ERRORS`
(ER_CODE,
ER_DESCRIPTION)
VALUES('PL_TAC_03',
'The user ID field cannot be null');

INSERT INTO `ERRORS`
(ER_CODE,
ER_DESCRIPTION)
VALUES('PL_TAC_04',
'The user ID field was not found');

INSERT INTO `ERRORS`
(ER_CODE,
ER_DESCRIPTION)
VALUES('PL_TAC_05',
'The priority field must be equal to or greater than 1 and equal to or less than 3');

INSERT INTO `ERRORS`
(ER_CODE,
ER_DESCRIPTION)
VALUES('PL_TAC_06',
'An unexpected error occurred, the PL_TASK_CREATION procedure has terminated.');

-- UPDATE TASK ERRORS

INSERT INTO `ERRORS`
(ER_CODE,
ER_DESCRIPTION)
VALUES('PL_TAU_01',
'The task ID field cannot be null');

INSERT INTO `ERRORS`
(ER_CODE,
ER_DESCRIPTION)
VALUES('PL_TAU_02',
'The task ID field was not found');

INSERT INTO `ERRORS`
(ER_CODE,
ER_DESCRIPTION)
VALUES('PL_TAU_03',
'A completed task cannot be updated');

INSERT INTO `ERRORS`
(ER_CODE,
ER_DESCRIPTION)
VALUES('PL_TAU_04',
'The priority field must be equal to or greater than 1 and equal to or less than 3');

INSERT INTO `ERRORS`
(ER_CODE,
ER_DESCRIPTION)
VALUES('PL_TAU_05',
'An unexpected error occurred, the PL_TASK_UPDATE procedure has terminated.');

-- DELETE TASK ERRORS

INSERT INTO `ERRORS`
(ER_CODE,
ER_DESCRIPTION)
VALUES('PL_TAD_01',
'The task ID field cannot be null or zero');

INSERT INTO `ERRORS`
(ER_CODE,
ER_DESCRIPTION)
VALUES('PL_TAD_02',
'The task ID field was not found');

INSERT INTO `ERRORS`
(ER_CODE,
ER_DESCRIPTION)
VALUES('PL_TAD_03',
'An unexpected error occurred, the PL_TASK_DELETION procedure has terminated.');
