const { ApiTasksError } = require('../../common/error/ApiTasksError');

class cantDeleteRoleError extends ApiTasksError {
    constructor(message, status) {
        super();
        this.status = `${status}` || 500;
        this.message = `${message}`;
    }
}

module.exports = { cantDeleteRoleError };