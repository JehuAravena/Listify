const express = require('express');
const router = express.Router();
const RoleController = require('../controller/roleController');

router.post('/createRole', RoleController.createRole);
router.put('/deleteRole/:ID_ROLE_IN', RoleController.deleteRole);
router.put('/updateRole', RoleController.updateRole);
router.get('/getAllRole', RoleController.getAllRole);
router.get('/getActiveRole', RoleController.getActiveRole);

module.exports = router;