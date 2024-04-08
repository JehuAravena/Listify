USE BD_LISTIFY;

-- ------------------------------------------------------------------------------
-- CREATE ROLE PERMISSION ERRORS
-- ------------------------------------------------------------------------------

INSERT INTO `ERRORS`
(ER_CODE,
ER_DESCRIPTION)
VALUES('PL_PRC_01',
'The role ID field cannot be null');

INSERT INTO `ERRORS`
(ER_CODE,
ER_DESCRIPTION)
VALUES('PL_PRC_02',
'The permission ID field cannot be null');

INSERT INTO `ERRORS`
(ER_CODE,
ER_DESCRIPTION)
VALUES('PL_PRC_03',
'The entered role ID does not exist');

INSERT INTO `ERRORS`
(ER_CODE,
ER_DESCRIPTION)
VALUES('PL_PRC_04',
'The entered permission ID does not exist');

INSERT INTO `ERRORS`
(ER_CODE,
ER_DESCRIPTION)
VALUES('PL_PRC_05',
'This role already has the entered permission');

INSERT INTO `ERRORS`
(ER_CODE,
ER_DESCRIPTION)
VALUES('PL_PRC_06',
'An unexpected error occurred, the PL_ROLE_PERMISSION_CREATION procedure has terminated');

-- ------------------------------------------------------------------------------
-- DELETE ROLE PERMISSION ERRORS
-- ------------------------------------------------------------------------------

INSERT INTO `ERRORS`
(ER_CODE,
ER_DESCRIPTION)
VALUES('PL_RPD_01',
'The role ID field must not be null');

INSERT INTO `ERRORS`
(ER_CODE,
ER_DESCRIPTION)
VALUES('PL_RPD_02',
'Role ID not found');

INSERT INTO `ERRORS`
(ER_CODE,
ER_DESCRIPTION)
VALUES('PL_RPD_03',
'An unexpected error occurred, PL_ROLE_PERMISSION_DELETE procedure has terminated');
