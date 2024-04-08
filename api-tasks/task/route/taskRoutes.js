const express = require('express');
const router = express.Router();
const TaskController = require('../controller/taskController');

router.post('/createTask', TaskController.createTask);
router.put('/updateTask', TaskController.updateTask);
router.delete('/deleteTask/:ID_TASK_IN', TaskController.deleteTask);
router.get('/getAllTask/', TaskController.getAllTask);
router.get('/getUserTask/:ID_USER_IN', TaskController.getUserTask);


module.exports = router;
