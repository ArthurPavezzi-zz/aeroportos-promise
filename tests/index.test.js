const AeroportosPromiseError = require('../src/errors/aeportos-promise')
const airports = require('../src/aeroportos-promise')

const scenarios = {
    success: require('./helpers/scenarios/success.json'),
    nonexistent: require('./helpers/scenarios/nonexistent.json'),
    invalid: {
        lessChars: require('./helpers/scenarios/invalid/lessChars.json'),
        moreChars: require('./helpers/scenarios/invalid/moreChars.json'),
        specialChars: require('./helpers/scenarios/invalid/specialChars.json'),
        notString: require('./helpers/scenarios/invalid/notString.json')
    }
}

describe('E2E', () => {
    it('Utilizando IATAs corretos com caixa alta, baixa e misto: CWB, cwb e cWb', async () => {
        const response1 = await airports('CWB');
        const response2 = await airports('cwb');
        const response3 = await airports('cWb');

        expect.assertions(3)
        expect(response1.data).toMatchObject(scenarios.success)
        expect(response2.data).toMatchObject(scenarios.success)
        expect(response3.data).toMatchObject(scenarios.success)
    })

    it('Utilizando um IATA inexistente: ZZZ', async () => {
        expect.assertions(2)

        try {
            await airports("ZZZ")
        } catch (error) {
            console.log(error)
            expect(error).toBeInstanceOf(AeroportosPromiseError)
            expect(error).toMatchObject(scenarios.nonexistent)
        }
    })

    it('Utilizando IATAs inválidos: ZZZZ, ZZ, A_Z, A1Z e 777', async () => {
        expect.assertions(10);

        try {
            await airports("ZZZZ")
        } catch (error) {
            expect(error).toBeInstanceOf(AeroportosPromiseError)
            expect(error).toMatchObject(scenarios.invalid.moreChars)
        }

        try {
            await airports("ZZ")
        } catch (error) {
            expect(error).toBeInstanceOf(AeroportosPromiseError)
            expect(error).toMatchObject(scenarios.invalid.lessChars)
        }

        try {
            await airports("A_Z")
        } catch (error) {
            expect(error).toBeInstanceOf(AeroportosPromiseError)
            expect(error).toMatchObject(scenarios.invalid.specialChars)
        }

        try {
            await airports("A1Z")
        } catch (error) {
            expect(error).toBeInstanceOf(AeroportosPromiseError)
            expect(error).toMatchObject(scenarios.invalid.specialChars)
        }

        try {
            await airports(777)
        } catch (error) {
            expect(error).toBeInstanceOf(AeroportosPromiseError)
            expect(error).toMatchObject(scenarios.invalid.notString)
        }
    })

    it('Não utilizando IATA - retornando todos os aeroportos', async () => {
        const response = await airports();
        const objectLength = Object.keys(response.data).length

        expect(objectLength).toEqual(300)
    })
});