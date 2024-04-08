const connection = require('../../common/config/database');

async function login(EMAIL_IN, PASSWORD_IN) {
    return new Promise(async (resolve, reject) => {
        try {
            const results = await connection.promise().query(
                'CALL PL_LOGIN(?, ?, @ID_RESULT_OUT, @ERROR_CODE_OUT, @ERROR_MESSAGE_OUT)',
                [EMAIL_IN, PASSWORD_IN]
            );

            const [outputResults] = await connection.promise().query(
                'SELECT @ID_RESULT_OUT as ID_RESULT_OUT, @ERROR_CODE_OUT as ERROR_CODE_OUT, @ERROR_MESSAGE_OUT as ERROR_MESSAGE_OUT'
            );

            const { ID_RESULT_OUT, ERROR_CODE_OUT, ERROR_MESSAGE_OUT } = outputResults[0];

            if (ERROR_CODE_OUT) {
                const errorResponse = {
                    code: ERROR_CODE_OUT,
                    message: ERROR_MESSAGE_OUT,
                };
                return reject(errorResponse);
            } else {
                resolve(ID_RESULT_OUT);
            }
        } catch (error) {
            console.error('Error executing stored procedure from repository:', error);
            reject('Internal Server Error from repository');
        }
    });
}

module.exports = {
    login
};
