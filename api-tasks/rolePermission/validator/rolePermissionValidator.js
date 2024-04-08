const Joi = require('joi');

const createPermissionRoleSchema = Joi.object({
    ROLE_ID: Joi.number().integer().allow(null),
    PERMISSION_ID: Joi.number().integer().allow(null),
});

function validateCreatePermissionRoleData(roleData) {
    const { error } = createPermissionRoleSchema.validate(roleData);
    return error ? error.details[0].message : null;
}

module.exports = {
    validateCreatePermissionRoleData
};
