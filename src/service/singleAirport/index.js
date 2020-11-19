const axios = require('axios');

async function getSingleAirportByIata(iata) {
    const url = `https://aeroportos-api.vercel.app/api/api/airports/${iata}`;

    try {
        return await axios.get(url);
    } catch (error) {
        return JSON.stringify({'erro': 'Erro ao buscar aeroporto'});
    }
}

module.exports = getSingleAirportByIata();