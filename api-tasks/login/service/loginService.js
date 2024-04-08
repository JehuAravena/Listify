const loginRepository = require('../repository/loginRepository');
const { validateLoginData } = require('../validator/loginValidator');
const { cantLoginError } = require('../error/cantLoginError');

async function login(EMAIL_IN, PASSWORD_IN) {
    try {
        const loginData = {
            EMAIL_IN,
            PASSWORD_IN,
        };

        const validationError = validateLoginData(loginData);
        if (validationError) {
            throw new cantLoginError(validationError);
        }

        return await loginRepository.login(EMAIL_IN, PASSWORD_IN);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    login
};
