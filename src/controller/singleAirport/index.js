const getAirport = require('../../service/singleAirport');

async function getAirportByIata(iata) {
    if (iata.length !== 3 && iata.match(/^[A-Za-z]+$/)) {
        return JSON.stringify({'erro': 'Código IATA inválido'});
    }
    return await getAirport(iata);
}

module.exports = getAirportByIata;