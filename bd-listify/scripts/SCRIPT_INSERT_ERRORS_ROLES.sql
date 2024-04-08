USE BD_LISTIFY;

-- ------------------------------------------------------------------------------
-- CREATE ROLE ERRORS
-- ------------------------------------------------------------------------------

INSERT INTO `ERRORS`
(ER_CODE,
ER_DESCRIPTION)
VALUES('PL_ROC_01',
'The role name field cannot be null');

INSERT INTO `ERRORS`
(ER_CODE,
ER_DESCRIPTION)
VALUES('PL_ROC_02',
'The role description field cannot be null');

INSERT INTO `ERRORS`
(ER_CODE,
ER_DESCRIPTION)
VALUES('PL_ROC_03',
'The role name already exists');

INSERT INTO `ERRORS`
(ER_CODE,
ER_DESCRIPTION)
VALUES('PL_ROC_04',
'An unexpected error occurred, the PL_ROLE_CREATION procedure has terminated.');

-- ------------------------------------------------------------------------------
-- DELETE ROLE ERRORS
-- ------------------------------------------------------------------------------

INSERT INTO `ERRORS`
(ER_CODE,
ER_DESCRIPTION)
VALUES('PL_ROD_01',
'The role ID field must not be null');

INSERT INTO `ERRORS`
(ER_CODE,
ER_DESCRIPTION)
VALUES('PL_ROD_02',
'Role ID not found');

INSERT INTO `ERRORS`
(ER_CODE,
ER_DESCRIPTION)
VALUES('PL_ROD_03',
'Roles with ID 1 and 2 cannot be deleted');

INSERT INTO `ERRORS`
(ER_CODE,
ER_DESCRIPTION)
VALUES('PL_ROD_04',
'The role cannot be deleted because it is in use');

INSERT INTO `ERRORS`
(ER_CODE,
ER_DESCRIPTION)
VALUES('PL_ROD_05',
'An unexpected error occurred, PL_ROLE_DELETE procedure has terminated');

-- ------------------------------------------------------------------------------
-- UPDATE ROLE ERRORS
-- ------------------------------------------------------------------------------

INSERT INTO `ERRORS`
(ER_CODE,
ER_DESCRIPTION)
VALUES('PL_ROU_01',
'The role ID field cannot be null');

INSERT INTO `ERRORS`
(ER_CODE,
ER_DESCRIPTION)
VALUES('PL_ROU_02',
'The entered role does not exist');

INSERT INTO `ERRORS`
(ER_CODE,
ER_DESCRIPTION)
VALUES('PL_ROU_03',
'Roles with ID 1 and 2 cannot be edited');

INSERT INTO `ERRORS`
(ER_CODE,
ER_DESCRIPTION)
VALUES('PL_ROU_04',
'The role name entered already exists');

INSERT INTO `ERRORS`
(ER_CODE,
ER_DESCRIPTION)
VALUES('PL_ROU_05',
'An unexpected error occurred. The PL_ROLE_UPDATE procedure has terminated.');
