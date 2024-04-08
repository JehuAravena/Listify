const levelRepository = require('../repository/levelRepository');

async function getAllLevel() {
    try {
        return await levelRepository.getAllLevel();
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getAllLevel
};
