const getAirport = require('../../service/singleAirport');

async function getAirportByIata(iata) {
    if (iata.length !== 3 && iata.match(/^[A-Za-z]+$/)) {
        return JSON.stringify({'erro': 'Código IATA inválido'});
    }

    try {
        return await getAirport(iata);
    } catch (error) {
        return JSON.stringify({'erro': 'Não foi encontrado um aeroporto com este código'});
    }
}

module.exports = getAirportByIata;