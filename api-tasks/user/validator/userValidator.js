const Joi = require('joi');
const createUserSchema = Joi.object({
    name: Joi.string().allow(null).max(50).min(1),
    nickname: Joi.string().allow(null).max(50).min(1),
    lastname: Joi.string().allow(null).max(50).min(1),
    email: Joi.string().allow(null).max(100).min(1),
    password: Joi.string().allow(null).max(50).min(1),
    idRole: Joi.number().allow(null),
});

function validateCreateUserData(userData) {
    const { error } = createUserSchema.validate(userData);
    return error ? error.details[0].message : null;
}


const updateUserSchema = Joi.object({
    ID: Joi.number().integer().allow(null),
    name: Joi.string().allow(null).max(50),
    nickname: Joi.string().allow(null).max(50),
    lastname: Joi.string().allow(null).max(50),
    email: Joi.string().email().allow(null).max(50),
    password: Joi.string().allow(null).max(50),
    idRole: Joi.number().integer().allow(null),
});

function validateUpdateUserData(userData) {
    const { error } = updateUserSchema.validate(userData);
    return error ? error.details[0].message : null;
}

const deleteUserSchema = Joi.object({
    ID: Joi.number().integer().allow(null),
});


function validateDeleteUserData(userData) {
    const { error } = deleteUserSchema.validate(userData);
    return error ? error.details[0].message : null;
}


module.exports = {
    validateCreateUserData,
    validateUpdateUserData,
    validateDeleteUserData,
};

