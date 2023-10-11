const express = require("express") //Importa o Express
const app = express() // Importa o servidor do Express
const dotenv = require("dotenv") 
const cors = require('cors')

const rotaArtista = require('./router/artistaRouter')
const rotaMovimento = require('./router/movimentoRouter')
const rotaObra = require('./router/obrasRoute')

dotenv.config() // configurando as variaveis de ambiente

// Conectando ao servidor
const conectar_bd = require('./service/mongo_connect')

conectar_bd()

//Configurando os middleware

app.use(cors()) // ativando o cross origem resourse share para a api aceitar multiplos servidores enviando e recebendo dados.
// conectar_bd()

//Rotas

app.get('/', (req,res) =>{

    try{
        conectar_bd()
    }
    catch{
        res.json({"Server Status" : "500 INTERNAL ERROR","Documentation":"https://github.com/WevertonSPWOS/api-obrasArtes", "Marketplace ":" https://rapidapi.com/WevertonSPWOS/api/api-obraartes"})
    }
    finally{
        res.json({"Server Status":"200 OK", "Documentation":"https://github.com/WevertonSPWOS/api-obrasArtes", "Marketplace ":"https://rapidapi.com/WevertonSPWOS/api/api-obraartes "},).status(200)

    }
})

app.use('',rotaArtista)
app.use('',rotaMovimento)
app.use('',rotaObra)


//Middleware caso não ache a rota

app.use((req,res,next) => {res.status(404).json("Recurso não encontrado")})

app.listen(process.env.SERVER_PORT, console.log("Servidor aberto na porta: " + process.env.SERVER_PORT)) // Liga o servidor do express
