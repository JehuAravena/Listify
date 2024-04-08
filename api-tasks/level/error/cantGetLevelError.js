const { ApiTasksError } = require('../../common/error/apiTasksError');

class CantGetAllLevelError extends ApiTasksError {
    constructor(message, status) {
        super();
        this.status = `${status}` || 500;
        this.message = `${message}`;
    }
}

module.exports = { CantGetAllLevelError };