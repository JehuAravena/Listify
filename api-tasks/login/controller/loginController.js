const loginService = require('../service/loginService');

async function login(req, res) {
    try {
        const { EMAIL_IN, PASSWORD_IN } = req.params;
        const ID_RESULT_OUT = await loginService.login(EMAIL_IN, PASSWORD_IN);
        
        res.status(200).json({
            ID_RESULT_OUT,
        });
    } catch (error) {
        res.status(500).json({
            error: {
                code: error.code,
                message: error.message,
            },
        });
    }
}

module.exports = {
    login
};
