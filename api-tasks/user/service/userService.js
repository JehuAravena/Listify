const userRepository = require('../repository/userRepository');
const { validateCreateUserData } = require('../validator/UserValidator');
const { CantCreateUserError } = require('../error/cantCreateUserError');
const { validateUpdateUserData } = require('../validator/UserValidator'); 
const { cantUpdateUserError } = require('../error/cantUpdateUserError'); 
const { validateDeleteUserData } = require('../validator/UserValidator');
const { cantDeleteUserError } = require('../error/cantDeleteUserError');

async function createUser(NAME_IN, NICKNAME_IN, LASTNAME_IN, EMAIL_IN, PASSWORD_IN, ID_ROLE_IN) {
    try {
        const userData = {
            name: NAME_IN,
            nickname: NICKNAME_IN,
            lastname: LASTNAME_IN,
            email: EMAIL_IN,
            password: PASSWORD_IN,
            idRole: ID_ROLE_IN,
        };
        const validationError = validateCreateUserData(userData);
        if (validationError) {
            throw new CantCreateUserError(validationError);
        }
        return await userRepository.createUser(NAME_IN, NICKNAME_IN, LASTNAME_IN, EMAIL_IN, PASSWORD_IN, ID_ROLE_IN);
    } catch (error) {
        throw error;
    }
}

async function updateUser(ID_USER_IN, NAME_IN, NICKNAME_IN, LASTNAME_IN, EMAIL_IN, PASSWORD_IN, ID_ROLE_IN) {
    try {
        const userData = {
            ID: ID_USER_IN,
            name: NAME_IN,
            nickname: NICKNAME_IN,
            lastname: LASTNAME_IN,
            email: EMAIL_IN,
            password: PASSWORD_IN,
            idRole: ID_ROLE_IN,
        };
        const validationError = validateUpdateUserData(userData);
        if (validationError) {
            throw new cantUpdateUserError(validationError);
        }
        return await userRepository.updateUser(ID_USER_IN, NAME_IN, NICKNAME_IN, LASTNAME_IN, EMAIL_IN, PASSWORD_IN, ID_ROLE_IN);
    } catch (error) {
        throw error;
    }
}



async function deleteUser(ID_USER_IN) {
    try {
        const userData = {  
            ID: ID_USER_IN, 
        };
        const validationError = validateDeleteUserData(userData);
        if (validationError) {
            throw new cantDeleteUserError(validationError);
        }
        return await userRepository.deleteUser(ID_USER_IN);
    } catch (error) {

        throw error;
    }
}

async function getAllUser() {
    try {
        return await userRepository.getAllUser();
    } catch (error) {
        throw error;
    }
}

async function getActiveUser() {
    try {
        return await userRepository.getActiveUser();
    } catch (error) {
        throw error;
    }
}

async function getSpecificUser(ID_USER_IN) {
    try {
        return await userRepository.getSpecificUser(ID_USER_IN);
    } catch (error) {
        throw error;
    }
}

async function getGoogleUser(EMAIL_USER_IN) {
    try {
        return await userRepository.getGoogleUser(EMAIL_USER_IN);
    } catch (error) {
        throw error;
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
