const roleService = require('../service/roleService');

async function createRole(req, res) {
    try {
        const { ROLE_NAME_IN, ROLE_DESCRIPTION_IN } = req.body;
        const ID_ROLE_OUT = await roleService.createRole(ROLE_NAME_IN, ROLE_DESCRIPTION_IN);
        res.status(201).json({
            ID_ROLE_OUT,
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

async function deleteRole(req, res) {
    try {
        const { ID_ROLE_IN } = req.params;
        statusOut = await roleService.deleteRole(ID_ROLE_IN);
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

async function updateRole(req, res) {
    try {
        const { ID_ROLE_IN, ROLE_NAME_IN, ROLE_DESCRIPTION_IN } = req.body;
        statusOut = await roleService.updateRole(ID_ROLE_IN, ROLE_NAME_IN, ROLE_DESCRIPTION_IN);
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


async function getAllRole(req, res) {
    try {
        const roles = await roleService.getAllRole();
        res.status(200).json(
            roles,
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

async function getActiveRole(req, res) {
    try {
        const roles = await roleService.getActiveRole();
        res.status(200).json(
            roles,
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
    createRole,
    deleteRole,
    updateRole,
    getAllRole,
    getActiveRole,

};

