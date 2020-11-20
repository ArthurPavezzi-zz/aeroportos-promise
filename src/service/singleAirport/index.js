const axios = require('axios');

async function getSingleAirportByIata(iata) {
    const url = `https://aeroportos-api.arthurpavezzi.vercel.app/api/api/airports/${iata}`;

    try {
        return await axios.get(url);
    } catch (error) {
        if (error.response.status === 404) {
            return JSON.stringify({'erro': 'Não foi encontrado um aeroporto com este código'});
        }
        return JSON.stringify({'erro': 'Erro ao buscar aeroporto'});
    }
}

module.exports = getSingleAirportByIata;