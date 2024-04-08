const Joi = require('joi');

const deleteRoleSchema = Joi.object({
    ID: Joi.number().integer().allow(null),
});

function validateDeleteRoleData(roleData) {
    const { error } = deleteRoleSchema.validate(roleData);
    return error ? error.details[0].message : null;
}

const createRoleSchema = Joi.object({
    ROLE_NAME: Joi.string().max(50).allow(null),
    ROLE_DESCRIPTION: Joi.string().max(255).allow(null),
});

function validateCreateRoleData(roleData) {
    const { error } = createRoleSchema.validate(roleData);
    return error ? error.details[0].message : null;
}

const updateRoleSchema = Joi.object({
    ID: Joi.number().integer().allow(null),
    ROLE_NAME: Joi.string().max(50).allow(null),
    ROLE_DESCRIPTION: Joi.string().max(255).allow(null),
    
});

function validateUpdateRoleData(roleData) {
    const { error } = updateRoleSchema.validate(roleData);
    return error ? error.details[0].message : null;
}

module.exports = {
    validateUpdateRoleData,
    validateCreateRoleData,
    validateDeleteRoleData

};

