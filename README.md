![npm](https://img.shields.io/npm/v/aeroportos-promise)
<h1 align="center">Aeroportos Promise 🛬🛫</h1>

<p align="center">Busca por aeroportos nacionais pelo código IATA</p>

## Features

- Suporte ao Node.js
- Alta disponibilidade
- Interface assíncrona


### Como utilizar

Basta utilizar o [código IATA](https://pt.wikipedia.org/wiki/C%C3%B3digo_aeroportu%C3%A1rio_IATA) do aeroporto como parâmetro. Como exemplo, vamos buscar o aeroporto Afonso Pena (CWB):

```js
const aeroportos = require('aeroportos-promise');

aeroportos('CWB').then(response => console.log(response.data));

// {
//   icao: 'SBCT',
//   iata: 'CWB',
//   name: 'Aeroporto Internacional Afonso Pena',
//   city: 'Curitiba',
//   state: 'Paraná',
//   elevation: 910.74,
//   lat: -25.5284996033,
//   lon: -49.1758003235,
//   tz: 'America/Sao_Paulo',
//   uf: 'PR'
// }
```

### Quando a sigla possui um formato inválido (não é uma string, possui caracteres especiais ou não tem 3 letras)
Nestes casos será retornado um `"validation_error""` e a biblioteca irá rejeitar imediatamente a Promise, sem chegar a consultar a [API](https://github.com/ArthurPavezzi/aeroportos-api).
```js

const aeroportos = require('aeroportos-promise');

aeroportos('C_B').catch(console.log);

// {
//   name: 'AeroportosPromiseError',
//   message: 'O código IATA deve conter exatamente 3 caracteres',
//   type: 'validation_error',
//   error: {
//     message: 'Código IATA informado possui mais do que 3 caracteres.',
//     service: 'iata_validation'
//   }
// }
```

### Quando o aeroporto não é encontrado
Neste caso retornará um `"service_error"`. Se você tem total certeza que existe um aeroporto com o código IATA informado, peço encarecidamente que reporte [aqui](https://github.com/ArthurPavezzi/aeroportos-api/issues).
```js

const aeroportos = require('aeroportos-promise');

aeroportos('ZZZ').catch(console.log);

// {
//   name: 'AeroportosPromiseError',
//   message: 'Aeroporto não encontrado',
//   type: 'service_error',
//   error: {
//     message: 'Não foi possível encontrar um aeroporto com este código IATA.',
//     service: 'aeroportos_api'
//   }
// }
```

### Instalação

```
npm install aeroportos-promise
```

## Autor

| [<img src="https://avatars1.githubusercontent.com/u/18685164?s=460&v=4" width="150"><br><sub>@ArthurPavezzi</sub>](https://github.com/ArthurPavezzi) |
| :---: |