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

aeroportos.getAirportByIata('CWB').then(console.log);

// {
//  city: "Curitiba",
//  elevation: 910.74,
//  iata: "CWB",
//  icao: "SBCT",
//  lat: -25.5284996033,
//  lon: -49.1758003235,
//  name: "Aeroporto Internacional Afonso Pena",
//  state: "Paraná",
//  tz: "America/Sao_Paulo",
//  uf: "PR"
//}
```

### Quando a sigla possui um formato inválido (caracteres especiais ou não tem 3 letras)
```js

const aeroportos = require('aeroportos-promise');

aeroportos.getAirportByIata('C_B').then(console.log);

// {"erro": "Código IATA inválido"}
```

### Quando a sigla não é encontrada
```js

const aeroportos = require('aeroportos-promise');

aeroportos.getAirportByIata('aaa').then(console.log);

// {"erro": 'Não foi encontrado um aeroporto com este código"}
```

### Instalação
#### npm

```
npm install --save aeroportos-promise
```

## Autor

| [<img src="https://avatars1.githubusercontent.com/u/18685164?s=460&v=4" width="150"><br><sub>@ArthurPavezzi</sub>](https://github.com/ArthurPavezzi) |
| :---: |