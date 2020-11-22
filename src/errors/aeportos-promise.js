class AeroportosPromiseError extends Error {
    constructor ({ message, type, error } = {}) {
        super()

        this.name = 'AeroportosPromiseError'
        this.message = message
        this.type = type
        this.error = error
    }
}

module.exports = AeroportosPromiseError
