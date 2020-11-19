const getAirports = require('../../service/allAirports');

async function getAllAirports() {
    try {
        return await getAirports();
    } catch (error) {
        return JSON.stringify({'erro': 'Erro desconhecido'});
    }
}

module.exports = getAllAirports;