const taskService = require('../service/taskService');

async function createTask(req, res) {
	try {
		const { TITLE_IN, DESCRIPTION_IN, PRIORITY_IN, ID_USER_IN } = req.body;
		const taskID = await taskService.createTask(TITLE_IN, DESCRIPTION_IN, PRIORITY_IN, ID_USER_IN);
		res.status(201).json(
			taskID,
		);
	} catch (error) {
		res.status(500).json({
			error: {
			code: error.code,
			message: error.message,
			},
		});
	}
}

async function updateTask(req, res) {
	try {
		const { ID_TASK_IN, TITLE_IN, DESCRIPTION_IN, PRIORITY_IN, STATUS_IN } = req.body;
		const statusOut = await taskService.updateTask( ID_TASK_IN, TITLE_IN, DESCRIPTION_IN, PRIORITY_IN, STATUS_IN );
		res.status(200).json({
			statusOut,
		});
	} catch (error) {
		res.status(500).json({
			error: {
			code: error.code,
			message: error.message,
			},
		});
	}
}

async function deleteTask(req, res) {
	try {
		const { ID_TASK_IN } = req.params;
		const statusOut = await taskService.deleteTask(ID_TASK_IN);
		res.status(200).json({
			statusOut,
		});
	} catch (error) {
		res.status(500).json({
			error: {
			code: error.code,
			message: error.message,
			},
		});
	}
}

async function getAllTask(req, res) {
	try {
		const tasks = await taskService.getAllTask();
		res.status(200).json(
			tasks,
		);
	} catch (error) {
		res.status(500).json({
			error: {
			code: error.code,
			message: error.message,
			},
		});
	}
}

async function getUserTask(req, res) {
	try {
		const { ID_USER_IN } = req.params;
		const tasks = await taskService.getUserTask(ID_USER_IN);
		res.status(200).json(
			tasks,
		);
	} catch (error) {
		res.status(500).json({
			error: {
			code: error.code,
			message: error.message,
			},
		});
	}
}

module.exports = {
  	createTask,
	updateTask,
	deleteTask,
	getAllTask,
	getUserTask,
};
