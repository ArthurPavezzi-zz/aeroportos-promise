const AeroportosPromiseError = require('./errors/aeportos-promise')
const getSingleAirport = require('./service/singleAirport')
const getAllAirports = require('./service/allAirports')
const Promise = require('./utils/promise-any')

function getAirport(iata = null) {
    if (iata === null) {

        return Promise.resolve(iata)
            .then(() => {
                return getAllAirports()
            })

    } else {

        return Promise.resolve(iata)
            .then(validateIataType)
            .then(validateIataLength)
            .then(validateIataChars)
            .then(async (iata) => {
                return await getSingleAirport(iata)
            })

    }
}

function validateIataType(iata) {
    if (typeof iata === 'string' || iata instanceof String) {
        return iata
    } else {
        const message = 'O código IATA deve ser uma string'
        const error_message = 'Código IATA informado não é uma string.'
        throwError(message, error_message)
    }
}

function validateIataLength(iata) {
    if (iata.length === 3) {
        return iata
    } else {
        const size = iata.length > 3 ? 'mais' : 'menos'
        const message = 'O código IATA deve conter exatamente 3 caracteres'
        const error_message = `Código IATA informado possui ${size} do que 3 caracteres.`
        throwError(message, error_message)
    }
}

function validateIataChars(iata) {
    if (iata.match(/^[A-Za-z]{3}/)) {
        return iata
    } else {
        const message = 'O código IATA deve conter apenas letras'
        const error_message = 'Código IATA informado possui caracteres especiais e/ou números.'

        throwError(message, error_message)
    }
}

function throwError(message, error_message) {
    throw new AeroportosPromiseError({
        message: message,
        type: 'validation_error',
        error: {
            message: error_message,
            service: 'iata_validation'
        }
    })
}

module.exports = getAirport