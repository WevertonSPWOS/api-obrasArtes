
# Api Obra Arte

Uma Api que retorna Obras de Artes, Artistas, Movimentos e etc...


## Link Oficial e Teste de Endpoint

[RapidApi](https://rapidapi.com/WevertonSPWOS/api/api-obraartes)

\
\
\



# Documentação da API

## Rota Movimento

#### Retorna todos os Movimentos


```http
  GET /movimento/todos
```
#### Retorna um movimento

```http
  GET /movimento/${nome}/obras
```
#### Retorna Obras relacionadas a um movimento especifico

```http
  GET /movimento/${nome}
```
### Parâmetros

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `nome`      | `string` | **Obrigatório**. O nome do movimento que irá retornar |


## Rota Artista

#### Retorna todos os artistas


```http
  GET /artista/todos
```

#### Retorna todos os nomes de artista

```http
  GET /artista/lista
```
#### Retorna as obras do artista

```http
  GET /artista/${nome}/obras
```
#### Retorna um artista especifico

```http
  GET /artista/${nome}
```

### Parâmetros

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `nome`      | `string` | **Obrigatório**. O nome do artista que irá retornar |


## Rota Obras

#### Retorna todos as obra


```http
  GET /obra/todos
```

#### Retorna todos os nomes das obras

```http
  GET /obra/lista
```
#### Retorna uma obras especifica

```http
  GET /obra/${nome}
```

### Parâmetros

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `nome`      | `string` | **Obrigatório**. O nome da obra que irá retornar |

## Uso/Exemplos

```javascript
const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://api-obraartes.p.rapidapi.com/obra/lista',
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'api-obraartes.p.rapidapi.com'
  }
};

async function pesquisa(){
try{
    const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}}

pesquisa()
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `X-RapidAPI-Key`      | `string` | **Obrigatório**. Chave da Api gerado pela Rapid |


```
output:

{
  '1': 'O Caminhante Sobre o Mar de Nevoa',
  '2': 'O Viajante Sobre o Mar de Névoa',
  '3': 'Mulher diante da aurora',
  '4': 'Saturno Devorando um de seus Filhos',
  '5': 'La nevada',
  '6': 'O Incêndio Noturno',
  '7': 'A Liberdade Guiando o Povo',
  '8': 'A Morte de Sardanapalus',
  '9': 'A Jovem Orfã no Cemitério',
  '10': 'Mona Lisa',
  '11': 'A Última Ceia',
  '12': 'Anunciação',
  '13': 'O Nascimento de Vênus',
  '14': 'A Primavera',
  '15': 'A Natividade Mística',
  '16': 'Madona Sistina',
  '17': 'Escola de Atenas',
  '18': 'Transfiguração',
  '19': 'Abaporu',
  '20': 'Romance',
  '21': 'Urutu',
  '22': 'Índia e Mulata',
  '23': 'Lavrador de Café',
  '24': 'Colhedores de Café',
  '25': 'Burrinho Correndo',
  '26': 'Paisagem de Santo Amaro',
  '27': 'O Farol',
  '28': 'A Persistência da Memória',
  '29': 'Cisnes Refletindo Elefantes',
  '30': 'O Grande Masturbador',
  '31': 'O Elefante Celebes',
  '32': 'O Olho do Silêncio',
  '33': 'Floresta e Pomba',
  '34': 'O Carnaval de Arlequim',
  '35': 'O Nascimento do Mundo',
  '36': 'Cachorro Latindo para a Lua',
  '37': 'A Noite Estrelada',
  '38': 'A Casa Amarela',
  '39': 'Terraço do Café à Noite',
  '40': 'Os Jogadores de Cartas',
  '41': 'Floresta',
  '42': 'Cesta de Maçãs',
  '43': 'O Pintor de Girassóis',
  '44': 'Quando Você Casa?',
  '45': 'Mulheres do Taiti'
}

```
# Local Host

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`MONGO_DB_NAME`

`MONGO_DB_URI`

`SERVER_PORT`

## Baixar Pacotes Node

Npm i

## Stack utilizada

**Back-end:** Node, Express, Mongoose, Cors\
**Banco de Dados:** Mongo Atlas

## Autores

- [Ryan](https://github.com/ryanNS3/)
- [Rodrigo](https://github.com/Rodriguou)
- [Weverton](https://github.com/WevertonSPWOS/)
- [Eloisa](https://github.com/eloisalaurentino)
- [Marcos](https://github.com/gitmvfs/)

