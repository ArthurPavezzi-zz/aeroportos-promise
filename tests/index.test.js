const airports = require('../src/aeroportos-promise')

const scenarios = {
    success: require('./helpers/scenarios/success.json'),
    nonexistent: require('./helpers/scenarios/nonexistent.json'),
    invalid: require('./helpers/scenarios/invalid.json')
}

describe('E2E', () => {
    test('Utilizando IATAs corretos com caixa alta, baixa e misto: CWB, cwb e cWb', async () => {
        expect.assertions(3);

        const response1 = await airports.getAirportByIata("CWB");
        const response2 = await airports.getAirportByIata("cwb");
        const response3 = await airports.getAirportByIata("cWb");

        expect(response1.data).toEqual(scenarios.success);
        expect(response2.data).toEqual(scenarios.success);
        expect(response3.data).toEqual(scenarios.success);
    });

    test('Utilizando um IATA inexistente: ZZZ', async () => {
        const response = await airports.getAirportByIata("ZZZ");

        expect(JSON.parse(response)).toEqual(scenarios.nonexistent);
    });

    test('Utilizando IATAs inválidos: ZZZZ, A_Z e A1Z', async () => {
        expect.assertions(3);

        const response1 = await airports.getAirportByIata("ZZZZ");
        const response2 = await airports.getAirportByIata("A_Z");
        const response3 = await airports.getAirportByIata("A1Z");

        expect(JSON.parse(response1)).toEqual(scenarios.invalid);
        expect(JSON.parse(response2)).toEqual(scenarios.invalid);
        expect(JSON.parse(response3)).toEqual(scenarios.invalid);
    });
});