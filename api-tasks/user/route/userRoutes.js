const express = require('express');
const router = express.Router();
const UserController = require('../controller/userController');

router.post('/createUser', UserController.createUser);
router.put('/updateUser', UserController.updateUser);
router.put('/deleteUser/:ID_USER_IN', UserController.deleteUser);
router.get('/getAllUser', UserController.getAllUser);
router.get('/getActiveUser', UserController.getActiveUser);
router.get('/getSpecificUser/:ID_USER_IN', UserController.getSpecificUser);

router.get('/getGoogleUser/:EMAIL_USER_IN', UserController.getGoogleUser);

module.exports = router;

