//Importando bibliotecas
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//Configurando variaveis de ambiente
const dotenv = require('dotenv')
dotenv.config({path: "../../.env"})

//Criando uma função que se conecta ao banco de dados
async function conectar_bd() {
''
    try{
       await mongoose.connect(process.env.MONGO_DB_URI, {
            dbName : process.env.MONGO_DB_NAME
        })
        .then(() => console.log("Conectado ao banco de dados"))
    } catch(erro){
        console.log("erro ao conectar no banco de dados: " + erro)
    }
}

//Exportando a função
module.exports = conectar_bd
