const Joi = require('joi');

const loginSchema = Joi.object({
    EMAIL_IN: Joi.string().email().allow(null),
    PASSWORD_IN: Joi.string().allow(null),
});

function validateLoginData(loginData) {
    const { error } = loginSchema.validate(loginData);
    return error ? error.details[0].message : null;
}

module.exports = {
    validateLoginData
};
