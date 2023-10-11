const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const dotenv = require('dotenv')

dotenv.config({path: "../../.env"})

async function conectar_bd() {
''
    try{
       await mongoose.connect(process.env.MONGO_DB_URI, {
            dbName : process.env.MONGO_DB_NAME,
        })
        .then(() => console.log("Conectado ao banco de dados"))
    } catch(erro){
        console.log("erro ao conectar no banco de dados: " + erro)
    }
}

module.exports = conectar_bd