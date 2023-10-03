const express = require("express") //Importa o Express
const app = express() // Importa o servidor do Express
const dotenv = require("dotenv") 
// const conectar_bd = require('./service/mongo_connect')
const cors = require('cors')

const rotas = require('./router/router')

dotenv.config() // configurando as variaveis de ambiente

//Configurando os middleware

app.use(cors()) // ativando o cross origem resourse share para a api aceitar multiplos servidores enviando e recebendo dados.
// conectar_bd()

//Rotas

app.use(rotas)

//Middleware caso não ache a rota

app.use((req,res,next) => {res.status(404).json("Recurso não encontrado")})


// app.listen(process.env.SERVER_PORT, console.log("Servidor aberto na porta: " + process.env.SERVER_PORT)) // Liga o servidor do express

app.listen(8081, function(){
    console.log("funcionaaa")
})