const connection = require('../../common/config/database');

async function getAllLevel() {
	return new Promise(async (resolve, reject) => {
		try {
			const results = await connection.promise().query(
				'SELECT * FROM LEVELS'
			);
			resolve(results[0]);
		} catch (error) {
			console.error('Error executing stored procedure from repository:', error);
			reject('Internal Server Error from repository');
		}
	});
}


module.exports = {
	getAllLevel
};
