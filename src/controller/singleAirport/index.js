const getAirport = require('../../service/singleAirport');

async function getAirportByIata(iata) {
    return iata.match(/^[A-Za-z][A-Za-z][A-Za-z]$/) ? await getAirport(iata) : JSON.stringify({'erro': 'Código IATA inválido'})
}

module.exports = getAirportByIata;