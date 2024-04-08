const Joi = require('joi');

const taskSchema = Joi.object({
    id: Joi.number().allow(null).min(0),
  	title: Joi.string().allow(null).max(50).min(1),
  	description: Joi.string().allow(null).max(255).min(0),
});

function validateTaskData(taskData) {
    const { error } = taskSchema.validate(taskData);
    return error ? error.details[0].message : null;
}

module.exports = {
    validateTaskData,
};
