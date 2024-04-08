const rolePermissionService = require('../service/rolePermissionService');

async function createPermissionRole(req, res) {
    try {
        const { ROLE_ID_IN, PERMISSION_ID_IN } = req.body;
        const ID_RESULT_OUT = await rolePermissionService.createPermissionRole(ROLE_ID_IN, PERMISSION_ID_IN);
        res.status(201).json({
            ID_RESULT_OUT,
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

async function deletePermissionRole(req, res) {
    try {
        const { ID_ROLE_IN } = req.params;
        statusOut = await rolePermissionService.deletePermissionRole(ID_ROLE_IN);
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

async function getPermissionRole(req, res) {
    try {
        const { ID_ROLE_IN } = req.params;
        const permissionRole = await rolePermissionService.getPermissionRole(ID_ROLE_IN);
        res.status(200).json(
            permissionRole,
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

async function getPermission(req, res) {
    try {
        const permission = await rolePermissionService.getPermission();
        res.status(200).json(
            permission,
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
    createPermissionRole,
    deletePermissionRole,
    getPermissionRole,
    getPermission,
};
