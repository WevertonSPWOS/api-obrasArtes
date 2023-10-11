const Movimento = require("./movimentoModel")
const mongoose = require('mongoose')
const conectar_bd = require('../../service/mongo_connect')

conectar_bd()
.then(() =>{

    const novoMovimento = new Movimento ({
        nomeMovimento:"Renascimento",
        descricaoMovimento:"A arte renascentista foi um movimento artístico que floresceu na Itália entre os séculos XIV e XVI. O movimento foi caracterizado por um retorno à arte e à cultura da antiguidade clássica, bem como por um novo foco no realismo e na perspectiva. Os artistas renascentistas buscaram representar o mundo de forma realista e humanista, colocando o homem no centro do universo.",
        dataInicio: 1092,
        dataTermino: 1092
    
    })
    
novoMovimento.save()
.then(() =>{
    console.log("Movimento salvo com sucesso")
})
.catch((err) =>{
    console.log("Erro ao salvar artista :" + err)
})

})

