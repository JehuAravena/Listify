const connection = require('../../common/config/database');

async function createUser(NAME_IN, NICKNAME_IN, LASTNAME_IN, EMAIL_IN, PASSWORD_IN, ID_ROLE_IN) {
	return new Promise(async (resolve, reject) => {
		try {
			const results = await connection.promise().query(
				'CALL PL_USER_CREATION(?, ?, ?, ?, ?, ?, @ID_RESULT_OUT, @ERROR_CODE_OUT, @ERROR_MESSAGE_OUT)',
				[NAME_IN, NICKNAME_IN, LASTNAME_IN, EMAIL_IN, PASSWORD_IN, ID_ROLE_IN]
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

async function updateUser(ID_USER_IN, NAME_IN, NICKNAME_IN, LASTNAME_IN, EMAIL_IN, PASSWORD_IN, ID_ROLE_IN) {
	return new Promise(async (resolve, reject) => {
		try {
			const results = await connection.promise().query(
				'CALL PL_USER_UPDATE(?, ?, ?, ?, ?, ?, ?, @STATUS_OUT, @ERROR_CODE_OUT, @ERROR_MESSAGE_OUT)',
				[ID_USER_IN, NAME_IN, NICKNAME_IN, LASTNAME_IN, EMAIL_IN, PASSWORD_IN, ID_ROLE_IN]
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


async function deleteUser(ID_USER_IN) {
	return new Promise(async (resolve, reject) => {
		try {
			const results = await connection.promise().query(
				'CALL PL_USER_DELETE(?, @STATUS_OUT, @ERROR_CODE_OUT, @ERROR_MESSAGE_OUT)',
				[ID_USER_IN]
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

async function getAllUser() {
	return new Promise(async (resolve, reject) => {
		try {
			const results = await connection.promise().query(
				'SELECT * FROM USERS'
			);
			resolve(results[0]);
		} catch (error) {
			console.error('Error executing stored procedure from repository:', error);
			reject('Internal Server Error from repository');
		}
	});
}

async function getActiveUser() {
	return new Promise(async (resolve, reject) => {
		try {
			const results = await connection.promise().query(
				'SELECT * FROM USERS WHERE US_ACTIVE = 1',
			);
			resolve(results[0]);
		} catch (error) {
			console.error('Error executing stored procedure from repository:', error);
			reject('Internal Server Error from repository');
		}
	});
}

async function getSpecificUser(ID_USER_IN) {
	return new Promise(async (resolve, reject) => {
		try {
			const results = await connection.promise().query(
				'SELECT * FROM USERS WHERE US_ID_USER = ?',
				[ID_USER_IN]
			);
			resolve(results[0]);
		} catch (error) {
			console.error('Error executing stored procedure from repository:', error);
			reject('Internal Server Error from repository');
		}
	});
}

async function getGoogleUser(EMAIL_USER_IN) {
	return new Promise(async (resolve, reject) => {
		try {
			const results = await connection.promise().query(
				'SELECT * FROM USERS WHERE US_EMAIL = ?',
				[EMAIL_USER_IN]
			);
			resolve(results[0]);
		} catch (error) {
			console.error('Error executing stored procedure from repository:', error);
			reject('Internal Server Error from repository');
		}
	});
}

module.exports = {
	createUser,
	updateUser,
	deleteUser,
	getAllUser,
	getActiveUser,
	getSpecificUser,
	getGoogleUser,
};
