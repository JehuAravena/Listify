const express = require('express');
const router = express.Router();
const rolePermissionController = require('../controller/rolePermissionController');

router.post('/createPermissionRole', rolePermissionController.createPermissionRole);
router.delete('/deletePermissionRole/:ID_ROLE_IN', rolePermissionController.deletePermissionRole);
router.get('/getPermissionRole/:ID_ROLE_IN', rolePermissionController.getPermissionRole);
router.get('/getPermission', rolePermissionController.getPermission);

module.exports = router;



