const { getIo } = require('../../common/config/socket');


const taskRepository = require('../repository/taskRepository');
const { validateTaskData } = require('../validator/taskValidator');
const { CantCreateTaskError } = require('../error/cantCreateTaskError'); 
const { CantUpdateTaskError } = require('../error/cantUpdateTaskError'); 
const { CantDeleteTaskError } = require('../error/cantDeleteTaskError');

async function createTask(TITLE_IN, DESCRIPTION_IN, PRIORITY_IN, ID_USER_IN) {
    try {
        const taskData = {
            title: TITLE_IN,
            description: DESCRIPTION_IN,
        };
        const validationError = validateTaskData(taskData);
        if (validationError) {
            throw new CantCreateTaskError(validationError);
        }
        const idNewTask = await taskRepository.createTask(TITLE_IN, DESCRIPTION_IN, PRIORITY_IN, ID_USER_IN);
        const newTask = await taskRepository.getTaskData(idNewTask);
        console.log(newTask);
        const io = getIo(); 
        io.emit('task-created', newTask);
        return newTask;
    } catch (error) {
        throw error;
    }
}

async function updateTask(ID_TASK_IN, TITLE_IN, DESCRIPTION_IN, PRIORITY_IN, STATUS_IN){
    try {
        const taskData = {
            title: TITLE_IN,
            description: DESCRIPTION_IN,
        };
        const validationError = validateTaskData(taskData);
        if (validationError) {
            throw new CantUpdateTaskError(validationError);
        }
        return await taskRepository.updateTask(ID_TASK_IN, TITLE_IN, DESCRIPTION_IN, PRIORITY_IN, STATUS_IN);
    } catch (error) {
        throw error;
    }
}

async function deleteTask(ID_TASK_IN) {
    try {
        const taskData = {
            id: ID_TASK_IN,
        };
        const validationError = validateTaskData(taskData);
        if (validationError) {
            throw new CantDeleteTaskError(validationError);
        }
        return await taskRepository.deleteTask(ID_TASK_IN);
    }
    catch(error){
        throw error;
    }
}

async function getAllTask() {
    try {
        return await taskRepository.getAllTask();
    } catch (error) {
        throw error;
    }
}

async function getUserTask(ID_USER_IN) {
    try {
        return await taskRepository.getUserTask(ID_USER_IN);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createTask,
    updateTask,
    deleteTask,
    getAllTask,
    getUserTask,
};
