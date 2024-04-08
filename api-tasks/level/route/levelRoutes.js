const express = require('express');
const router = express.Router();
const LevelController = require('../controller/levelController');

router.get('/getAllLevel', LevelController.getAllLevel);

module.exports = router;
