const AeroportosPromiseError = require('../../errors/aeportos-promise')
const axios = require('axios')

async function getSingleAirportByIata(iata) {
    const url = `https://aeroportos-api.arthurpavezzi.vercel.app/api/api/airports/${iata}`

    try {
        return await axios.get(url)
    } catch (error) {
        let { status } = error.response
        const message = status === 404 ? 'Aeroporto não encontrado'
            : 'Erro interno da API'
        const error_message = status === 404 ? 'Não foi possível encontrar um aeroporto com este código IATA.'
            : 'O serviço retornou um erro.'

        throw new AeroportosPromiseError({
            message: message,
            type: 'service_error',
            error: {
                message: error_message,
                service: 'aeroportos_api'
            }
        })
    }
}

module.exports = getSingleAirportByIata;