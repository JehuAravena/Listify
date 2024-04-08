const levelService = require('../service/levelService');

async function getAllLevel(req, res) {
	try {
		const levels = await levelService.getAllLevel();
		res.status(200).json(
			levels,
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
	getAllLevel,
};


