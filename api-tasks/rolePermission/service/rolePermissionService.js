const rolePermissionRepository = require('../repository/rolePermissionRepository');
const { validateCreatePermissionRoleData } = require('../validator/rolePermissionValidator');
const { cantCreatePermissionRoleError } = require('../error/cantCreatePermissionRoleError');

async function createPermissionRole(ROLE_ID_IN, PERMISSION_ID_IN) {
    try {
        const roleData = {
            ROLE_ID: ROLE_ID_IN,
            PERMISSION_ID: PERMISSION_ID_IN,
        };
        const validationError = validateCreatePermissionRoleData(roleData);
        if (validationError) {
            throw new cantCreatePermissionRoleError(validationError);
        }
        return await rolePermissionRepository.createPermissionRole(ROLE_ID_IN, PERMISSION_ID_IN);
    } catch (error) {
        throw error;
    }
}

async function deletePermissionRole(ID_ROLE_IN) {
    try {
        return await rolePermissionRepository.deletePermissionRole(ID_ROLE_IN);
    } catch (error) {
        throw error;
    }
}

async function getPermissionRole(ID_ROLE_IN) {
    try {
        return await rolePermissionRepository.getPermissionRole(ID_ROLE_IN);
    } catch (error) {
        throw error;
    }
}

async function getPermission() {
    try {
        return await rolePermissionRepository.getPermission();
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createPermissionRole,
    deletePermissionRole,
    getPermissionRole,
    getPermission,
};

