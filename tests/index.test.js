const airports = require('../src/aeroportos-promise')

const scenarios = {
    success: require('./helpers/scenarios/success.json'),
    nonexistent: require('./helpers/scenarios/nonexistent.json'),
    invalid: require('./helpers/scenarios/invalid.json')
}

describe('E2E', () => {
    test('Utilizando um IATA correto: CWB', async () => {
        const response = await airports.getAirportByIata("CWB");
        expect(response.data).toEqual(scenarios.success);
    });

    test('Utilizando um IATA inexistente: ZZZ', async () => {
        const response = await airports.getAirportByIata("ZZZ");
        expect(JSON.parse(response)).toEqual(scenarios.nonexistent);
    });

    test('Utilizando um IATA inválido: ZZZZ', async () => {
        const response = await airports.getAirportByIata("ZZZZ");
        expect(JSON.parse(response)).toEqual(scenarios.invalid);
    });
});