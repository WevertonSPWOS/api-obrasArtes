const Movimento = require("./movimentoModel")
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

//  tá com um bug de não pegar o dotenv, depois arrumo

mongoose.connect("mongodb+srv://senai115:senai115@teste.8334gnw.mongodb.net/?retryWrites=true&w=majority",{
    dbName:"api_obrasArtes"
})
.then(() =>{

    const modernismo = new Movimento ({
        nomeMovimento:"Modernismo",
        descricaoMovimento:"O mordenismo é foi um movimento artístico do início do século XX que rompeu com os valores e estilos tradicionais, buscando a inovação e a exploração de novos temas e formas de expressão, como a subjetividade, a fragmentação e a ironia.",
        dataInicio: 1890,
        dataTermino: 1970
    
    })
    
modernismo.save()
.then(() =>{
    console.log("Movimento salvo com sucesso")
})
.catch((err) =>{
    console.log("Erro ao salvar movimento: " + err)
})

})

