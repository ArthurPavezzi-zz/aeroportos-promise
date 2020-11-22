const axios = require('axios')

async function getAllAirports() {
    const url = 'https://aeroportos-api.vercel.app/api/api/airports'

    return await axios.get(url)

}

module.exports = getAllAirports;