const {ApiTasksError} = require('../../common/error/ApiTasksError');

class cantGetPermissionError extends ApiTasksError {
    constructor(message, status) {
        super();
        this.status = `${status}` || 500;
        this.message = `${message}`;
    }
}

module.exports = {cantGetPermissionError};

