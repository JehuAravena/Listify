const { ApiTasksError } = require('../../common/error/ApiTasksError');

class cantGetAllUserError extends ApiTasksError {
    constructor(message, status) {
        super();
        this.status = `${status}` || 500;
        this.message = `${message}`;
    }
}

module.exports = { cantGetAllUserError };