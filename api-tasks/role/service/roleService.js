const roleRepository = require('../repository/roleRepository');
const { validateDeleteRoleData } = require('../validator/roleValidator');
const { cantDeleteRoleError } = require('../error/cantDeleteRoleError');
const { validateCreateRoleData } = require('../validator/roleValidator');
const { cantCreateRoleError } = require('../error/cantCreateRoleError');
const { validateUpdateRoleData } = require('../validator/roleValidator');
const { cantUpdateRoleError } = require('../error/cantUpdateRoleError');



async function deleteRole(ID_ROLE_IN) {
    try {
        const roleData = {  
            ID: ID_ROLE_IN, 
        };
        const validationError = validateDeleteRoleData(roleData);
        if (validationError) {
            throw new cantDeleteRoleError(validationError);
        }
        return await roleRepository.deleteRole(ID_ROLE_IN);
    } catch (error) {
        throw error;
    }
}


async function createRole(ROLE_NAME_IN, ROLE_DESCRIPTION_IN) {
    try {
        const roleData = {
            ROLE_NAME: ROLE_NAME_IN,
            ROLE_DESCRIPTION: ROLE_DESCRIPTION_IN,
        };
        const validationError = validateCreateRoleData(roleData);
        if (validationError) {
            throw new cantCreateRoleError(validationError);
        }
        return await roleRepository.createRole(ROLE_NAME_IN, ROLE_DESCRIPTION_IN);
    } catch (error) {
        throw error;
    }
}
async function updateRole(ID_ROLE_IN, ROLE_NAME_IN, ROLE_DESCRIPTION_IN) {
    try {
        const roleData = {
            ID: ID_ROLE_IN,
            ROLE_NAME: ROLE_NAME_IN,
            ROLE_DESCRIPTION: ROLE_DESCRIPTION_IN,
        };
        const validationError = validateUpdateRoleData(roleData);
        if (validationError) {
            throw new cantUpdateRoleError(validationError);
        }
        return await roleRepository.updateRole(ID_ROLE_IN, ROLE_NAME_IN, ROLE_DESCRIPTION_IN);
    } catch (error) {
        throw error;
    }
}

async function getAllRole () {
    try {
        return await roleRepository.getAllRole();
    } catch (error) {
        throw error;
    }
}

async function getActiveRole () {
    try {
        return await roleRepository.getActiveRole();
    } catch (error) {
        throw error;
    }
}


module.exports = {
    createRole,
    deleteRole,
    updateRole,
    getAllRole,
    getActiveRole,
};