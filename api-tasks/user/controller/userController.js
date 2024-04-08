const userService = require('../service/userService');

async function createUser(req, res) {
	try {
		const { NAME_IN, NICKNAME_IN, LASTNAME_IN, EMAIL_IN, PASSWORD_IN, ID_ROLE_IN } = req.body;
		const userID = await userService.createUser(NAME_IN, NICKNAME_IN, LASTNAME_IN, EMAIL_IN, PASSWORD_IN, ID_ROLE_IN);
		res.status(201).json({
			userID,
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

async function updateUser(req, res) {
    try {
        const { ID_USER_IN, NAME_IN, NICKNAME_IN, LASTNAME_IN, EMAIL_IN, PASSWORD_IN, ID_ROLE_IN } = req.body;
        statusOut = await userService.updateUser(ID_USER_IN, NAME_IN, NICKNAME_IN, LASTNAME_IN, EMAIL_IN, PASSWORD_IN, ID_ROLE_IN);
        res.status(200).json({
            statusOut,
        });
    }  catch (error) {
        res.status(500).json({
            error: {
            code: error.code,
            message: error.message,
            },
        });
    }
}

async function deleteUser(req, res) {
    try {
        const { ID_USER_IN } = req.params;
        statusOut = await userService.deleteUser(ID_USER_IN);
        res.status(200).json({
            statusOut,
        });
    }  catch (error) {
        res.status(500).json({
            error: {
            code: error.code,
            message: error.message,
            },
        });
    }
}

async function getAllUser(req, res) {
    try {
        const user = await userService.getAllUser();
        res.status(200).json(
            user,
        );
    }  catch (error) {
        res.status(500).json({
            error: {
            code: error.code,
            message: error.message,
            },
        });
    }
}

async function getActiveUser(req, res) {
    try {
        const user = await userService.getActiveUser();
        res.status(200).json(
            user,
        );
    }  catch (error) {
        res.status(500).json({
            error: {
            code: error.code,
            message: error.message,
            },
        });
    }
}

async function getSpecificUser(req, res) {
    try {
        const { ID_USER_IN } = req.params;
        const user = await userService.getSpecificUser(ID_USER_IN);
        res.status(200).json(
            user,
        );
    }  catch (error) {
        res.status(500).json({
            error: {
            code: error.code,
            message: error.message,
            },
        });
    }
}

async function getGoogleUser(req, res) {
    try {
        const { EMAIL_USER_IN } = req.params;
        const user = await userService.getGoogleUser(EMAIL_USER_IN);
        res.status(200).json(
            user,
        );
    }  catch (error) {
        res.status(500).json({
            error: {
            code: error.code,
            message: error.message,
            },
        });
    }
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



