const express = require('express');
const router = express.Router();
const LoginController = require('../controller/loginController');

router.get('/login/:EMAIL_IN/:PASSWORD_IN', LoginController.login);

module.exports = router;