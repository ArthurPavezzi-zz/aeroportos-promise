const axios = require('axios');

async function getAllAirports() {
    const url = 'https://aeroportos-api.vercel.app/api/api/airports';

    try {
        return await axios.get(url);
    } catch (error) {
        return JSON.stringify({'erro': 'Erro ao buscar aeroportos'});
    }
}

module.exports = getAllAirports();