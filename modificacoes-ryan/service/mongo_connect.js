const dotenv = require("dotenv") 
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

dotenv.config() // configurando as variaveis de ambiente

async function conectar_bd() {

    // Connect MongoDB at default port 27017.

    // ALiSSQSnBuUJdISX
    try{
       await mongoose.connect("mongodb+srv://ryansantosn333:ALiSSQSnBuUJdISX@galeriaarte.taf4mqr.mongodb.net/?retryWrites=true&w=majority", {
            useNewUrlParser: true, useUnifiedTopology: true
        
        })
        console.log("aaaa")
    } catch(erro){
        console.log("erro ao conectar no banco de dados: " + erro)
    }
}

module.exports = conectar_bd