class ApiTasksError extends Error {
    constructor(message, status, innerError = {}) {
        super(message);
        this.status = status;
        this.innerError = innerError;
        this.message = `ApiTasks Error: ${message}`;
    }
}
  
module.exports = { ApiTasksError };
  