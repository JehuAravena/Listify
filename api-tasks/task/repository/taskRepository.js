const connection = require('../../common/config/database');

async function createTask(TITLE_IN, DESCRIPTION_IN, PRIORITY_IN, ID_USER_IN) {
	return new Promise(async (resolve, reject) => {
		try {
			const results = await connection.promise().query(
				'CALL PL_TASK_CREATION(?, ?, ?, ?, @ID_RESULT_OUT, @ERROR_CODE_OUT, @ERROR_MESSAGE_OUT)',
				[TITLE_IN, DESCRIPTION_IN, PRIORITY_IN, ID_USER_IN]
			);
			const outputResults = await connection.promise().query(
				'SELECT @ID_RESULT_OUT AS ID_RESULT_OUT, @ERROR_CODE_OUT AS ERROR_CODE_OUT, @ERROR_MESSAGE_OUT AS ERROR_MESSAGE_OUT'
			);
			const { ID_RESULT_OUT, ERROR_CODE_OUT, ERROR_MESSAGE_OUT } = outputResults[0][0];
			if (ERROR_CODE_OUT) {
				reject({ code: ERROR_CODE_OUT, message: ERROR_MESSAGE_OUT });
			} else {
				resolve(ID_RESULT_OUT);
			}
		} catch (error) {
			console.error('Error executing stored procedure from repository:', error);
			reject('Internal Server Error from repository');
		}
	});
}

async function updateTask(ID_TASK_IN, TITLE_IN, DESCRIPTION_IN, PRIORITY_IN, STATUS_IN) {
	return new Promise(async (resolve, reject) => {
		try {
			const results = await connection.promise().query(
				'CALL PL_TASK_UPDATE(?, ?, ?, ?, ?, @STATUS_OUT, @ERROR_CODE_OUT, @ERROR_MESSAGE_OUT)',
				[ID_TASK_IN, TITLE_IN, DESCRIPTION_IN, PRIORITY_IN, STATUS_IN]
			);
			const outputResults = await connection.promise().query(
				'SELECT @STATUS_OUT AS STATUS_OUT, @ERROR_CODE_OUT AS ERROR_CODE_OUT, @ERROR_MESSAGE_OUT AS ERROR_MESSAGE_OUT'
			);
			const { STATUS_OUT, ERROR_CODE_OUT, ERROR_MESSAGE_OUT } = outputResults[0][0];
			if (ERROR_CODE_OUT) {
				reject({ code: ERROR_CODE_OUT, message: ERROR_MESSAGE_OUT });
			} else {
				resolve(STATUS_OUT);
			}
		}
		catch(error){
			console.error('Error executing stored procedure from repository:', error);
			reject('Internal Server Error from repository');
		}
	});
}

async function deleteTask(ID_TASK_IN) {
	return new Promise(async (resolve, reject) => {
		try {
			const results = await connection.promise().query(
				'CALL PL_TASK_DELETE(?, @STATUS_OUT, @ERROR_CODE_OUT, @ERROR_MESSAGE_OUT)',
				[ID_TASK_IN]
			);
			const outputResults = await connection.promise().query(
				'SELECT @STATUS_OUT AS STATUS_OUT, @ERROR_CODE_OUT AS ERROR_CODE_OUT, @ERROR_MESSAGE_OUT AS ERROR_MESSAGE_OUT'
			);
			const { STATUS_OUT, ERROR_CODE_OUT, ERROR_MESSAGE_OUT } = outputResults[0][0];
			if (ERROR_CODE_OUT) {
				reject({ code: ERROR_CODE_OUT, message: ERROR_MESSAGE_OUT });
			} else {
				resolve(STATUS_OUT);
			}
		} catch (error) {
			console.error('Error executing stored procedure from repository:', error);
			reject('Internal Server Error from repository');
		}
	});
}

async function getAllTask() {
	return new Promise(async (resolve, reject) => {
		try {
			const results = await connection.promise().query(
				'SELECT * FROM TASKS ORDER BY TA_CREATION_DATE DESC'
			);
			resolve(results[0]);
		} catch (error) {
			console.error('Error executing stored procedure from repository:', error);
			reject('Internal Server Error from repository');
		}
	});
}

async function getUserTask(ID_USER_IN) {
	return new Promise(async (resolve, reject) => {
		try {
			const results = await connection.promise().query(
				'SELECT * FROM TASKS WHERE TA_ID_USER = ? ORDER BY TA_CREATION_DATE DESC',
				[ID_USER_IN]
			);
			resolve(results[0]);
		} catch (error) {
			console.error('Error executing stored procedure from repository:', error);
			reject('Internal Server Error from repository');
		}
	});
}

async function getTaskData(ID_TASK_IN) {
	return new Promise(async (resolve, reject) => {
		try {
			const results = await connection.promise().query(
				'SELECT * FROM TASKS WHERE TA_ID_TASK = ?',
				[ID_TASK_IN]
			);
			resolve(results[0][0]);
		} catch (error) {
			console.error('Error executing stored procedure from repository:', error);
			reject('Internal Server Error from repository');
		}
	});
}

module.exports = {
  	createTask,
	updateTask,
	deleteTask,
	getAllTask,
	getUserTask,
	getTaskData
};
