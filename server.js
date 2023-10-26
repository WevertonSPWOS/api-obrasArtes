// Import das bibliotecas

const express = require("express") 
const app = express() 
const dotenv = require("dotenv") 
const cors = require('cors')

// Import das rotas 

const rotaArtista = require('./router/artistaRouter')
const rotaMovimento = require('./router/movimentoRouter')
const rotaObra = require('./router/obrasRoute')
const rotaComentario = require("./router/comentarioRouter")

//Import dos services
const conectar_bd = require('./service/mongo_connect')

// Conectando ao Banco de dados e Variaveis de ambiente
conectar_bd()
dotenv.config() 


//Configurando os middleware

app.use(cors()) // ativando o cross origem resourse share para a api aceitar multiplos servidores enviando e recebendo dados.
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

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
app.use('',rotaComentario)

//Middleware caso não ache a rota

app.use((req,res,next) => {res.status(404).json("Recurso não encontrado")})

//Abrindo o servidor
app.listen(process.env.SERVER_PORT, console.log("Servidor aberto na porta: " + process.env.SERVER_PORT)) // Liga o servidor do express
