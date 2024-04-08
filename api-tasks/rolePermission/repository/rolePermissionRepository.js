const connection = require('../../common/config/database');

async function createPermissionRole(ID_ROLE_IN, ID_PERMISSION_IN) {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await connection.promise().query(
                'CALL PL_ROLE_PERMISSION_CREATION(?, ?, @ID_RESULT_OUT, @ERROR_CODE_OUT, @ERROR_MESSAGE_OUT)',
                [ID_ROLE_IN, ID_PERMISSION_IN]
            );
            const outputResult = await connection.promise().query(
                'SELECT @ID_RESULT_OUT AS ID_RESULT_OUT, @ERROR_CODE_OUT AS ERROR_CODE_OUT, @ERROR_MESSAGE_OUT AS ERROR_MESSAGE_OUT'
            );
            const { ID_RESULT_OUT, ERROR_CODE_OUT, ERROR_MESSAGE_OUT } = outputResult[0][0];
            if (ERROR_CODE_OUT) {
                reject({ code: ERROR_CODE_OUT, message: ERROR_MESSAGE_OUT });
            } else {
                resolve(ID_RESULT_OUT);
            }
        } catch (error) {
            console.error('Error executing stored procedure from repository:', error);
            reject('Internal Server Error from repository');

        }
    }
    );
}

async function deletePermissionRole(ID_ROLE_IN) {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await connection.promise().query(
                'CALL PL_ROLE_PERMISSION_DELETE(?, @STATUS_OUT, @ERROR_CODE_OUT, @ERROR_MESSAGE_OUT)',
                [ID_ROLE_IN]
            );
            const outputResult = await connection.promise().query(
                'SELECT @STATUS_OUT AS STATUS_OUT, @ERROR_CODE_OUT AS ERROR_CODE_OUT, @ERROR_MESSAGE_OUT AS ERROR_MESSAGE_OUT'
            );
            const { STATUS_OUT, ERROR_CODE_OUT, ERROR_MESSAGE_OUT } = outputResult[0][0];
            if (ERROR_CODE_OUT) {
                reject({ code: ERROR_CODE_OUT, message: ERROR_MESSAGE_OUT });
            } else {
                resolve(STATUS_OUT);
            }
        } catch (error) {
            console.error('Error executing stored procedure from repository:', error);
            reject('Internal Server Error from repository');

        }
    }
    );
}

async function getPermissionRole(ID_ROLE_IN) {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await connection.promise().query(
                'SELECT * FROM ROLE_PERMISSIONS WHERE RP_ID_ROLE = ?',
                [ID_ROLE_IN]
            );
            resolve(result[0]);
        } catch (error) {
            console.error('Error executing stored procedure from repository:', error);
            reject('Internal Server Error from repository');

        }
    }
    );
}

async function getPermission() {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await connection.promise().query(
                'SELECT * FROM PERMISSIONS'
            );
            resolve(result[0]);
        } catch (error) {
            console.error('Error executing stored procedure from repository:', error);
            reject('Internal Server Error from repository');

        }
    }
    );
}

module.exports = {
    createPermissionRole,
    deletePermissionRole,
    getPermissionRole,
    getPermission,
};