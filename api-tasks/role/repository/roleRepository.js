const connection = require('../../common/config/database');


async function createRole(ROLE_NAME_IN, ROLE_DESCRIPTION_IN) {
    return new Promise(async (resolve, reject) => {
        try {
            const results = await connection.promise().query(
                'CALL PL_ROLE_CREATION(?,?, @ID_ROLE_OUT, @ERROR_CODE_OUT, @ERROR_MESSAGE_OUT)',
                [ROLE_NAME_IN, ROLE_DESCRIPTION_IN]
            );
            const outputResults = await connection.promise().query(
                'SELECT @ID_ROLE_OUT AS ID_ROLE_OUT, @ERROR_CODE_OUT AS ERROR_CODE_OUT, @ERROR_MESSAGE_OUT AS ERROR_MESSAGE_OUT'
            );
            const { ID_ROLE_OUT, ERROR_CODE_OUT, ERROR_MESSAGE_OUT } = outputResults[0][0];
            if (ERROR_CODE_OUT) {
                reject({ code: ERROR_CODE_OUT, message: ERROR_MESSAGE_OUT });
            } else {
                resolve(ID_ROLE_OUT);
            }
        } catch (error) {
            console.error('Error executing stored procedure from repository:', error);
            reject('Internal Server Error from repository');
        }
    });
}


async function deleteRole(ID_ROLE_IN) {
    return new Promise(async (resolve, reject) => {
        try {
            const results = await connection.promise().query(
                'CALL PL_ROLE_DELETE(?, @STATUS_OUT, @ERROR_CODE_OUT, @ERROR_MESSAGE_OUT)',
                [ID_ROLE_IN]
            );
            const outputResults = await connection.promise().query(
                'SELECT @STATUS_OUT AS STATUS_OUT, @ERROR_CODE_OUT AS ERROR_CODE_OUT, @ERROR_MESSAGE_OUT AS ERROR_MESSAGE_OUT'
            );
            const { STATUS_OUT, ERROR_CODE_OUT, ERROR_MESSAGE_OUT } = outputResults[0][0];
            if (ERROR_CODE_OUT) {
                reject({ code: ERROR_CODE_OUT, message: ERROR_MESSAGE_OUT });
            } else {
                resolve(STATUS_OUT);
            }
        } catch (error) {
            console.error('Error executing stored procedure from repository:', error);
            reject('Internal Server Error from repository');
        }
    });
}

async function updateRole(ID_ROLE_IN, ROLE_NAME_IN, ROLE_DESCRIPTION_IN) {
    return new Promise(async (resolve, reject) => {
        try {
            const results = await connection.promise().query(
                'CALL PL_ROLE_UPDATE(?, ?, ?,@RO_ACTIVE, @STATUS_OUT, @ERROR_CODE_OUT, @ERROR_MESSAGE_OUT)',
                [ID_ROLE_IN, ROLE_NAME_IN, ROLE_DESCRIPTION_IN]
            );
            const outputResults = await connection.promise().query(
                'SELECT @STATUS_OUT AS STATUS_OUT,@RO_ACTIVE AS RO_ACTIVE , @ERROR_CODE_OUT AS ERROR_CODE_OUT, @ERROR_MESSAGE_OUT AS ERROR_MESSAGE_OUT'
            );
            const { STATUS_OUT, ERROR_CODE_OUT, ERROR_MESSAGE_OUT } = outputResults[0][0];
            if (ERROR_CODE_OUT) {
                reject({ code: ERROR_CODE_OUT, message: ERROR_MESSAGE_OUT });
            } else {
                resolve(STATUS_OUT);
            }
        } catch (error) {
            console.error('Error executing stored procedure from repository:', error);
            reject('Internal Server Error from repository');
        }
    });
}


async function getAllRole() {
    return new Promise(async (resolve, reject) => {
        try {
            const results = await connection.promise().query(
                'SELECT * FROM ROLES'
            );
            resolve(results[0]);
        } catch (error) {
            console.error('Error executing stored procedure from repository:', error);
            reject('Internal Server Error from repository');
        }
    });
}

async function getActiveRole() {
    return new Promise(async (resolve, reject) => {
        try{
            const result = await connection.promise().query(
                'SELECT * FROM ROLES WHERE RO_ACTIVE = 1'
            );
            resolve(result[0]);
        } catch (error) {
            console.error('Error executing stored procedure from repository:', error);
            reject('Internal Server Error from repository');
    }
    });

}



module.exports = {
    createRole,
    deleteRole,
    updateRole,
    getAllRole,
    getActiveRole,
    
};

