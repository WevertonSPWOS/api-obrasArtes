const Movimento = require("./movimentoModel")
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

//  tá com um bug de não pegar o dotenv, depois arrumo

mongoose.connect("",{
    dbName:""
})
.then(() =>{

    const surrealismo = new Movimento ({
        nomeMovimento:"Surrealismo",
        descricaoMovimento:"O surrealismo, surgido em meados da década de 1920, é um movimento artístico e literário que explorou as profundezas do inconsciente humano, os sonhos e o pensamento irracional. Liderado por André Breton, o surrealismo buscou romper com as convenções culturais e sociais, revelando os aspectos mais profundos e misteriosos da mente humana. Os artistas surrealistas, como Salvador Dalí, Joan Miró e Max Ernst, criaram obras que muitas vezes desafiavam a lógica e a realidade, apresentando paisagens oníricas, imagens perturbadoras e elementos absurdos.",
        dataInicio: 1924,
        dataTermino: 1945
    })

    const posImpressionismo = new Movimento ({
        nomeMovimento:"Pós-Impressionismo",
        descricaoMovimento:"Movimento artístico que se seguiu ao impressionismo e abrangeu um período diversificado na história da arte. Artistas pós-impressionistas exploraram a expressão individual, o uso da cor, a estrutura e a composição de maneiras inovadoras. O pós-impressionismo contribuiu para o desenvolvimento de movimentos posteriores, como o fauvismo e o cubismo, e deixou uma marca duradoura na evolução da arte moderna.",
        dataInicio: 1886,
        dataTermino: 1910
    })
    
    surrealismo.save()
    .then(() =>{
        console.log("Movimento salvo com sucesso")
    })
    .catch((err) =>{
        console.log("Erro ao salvar artista :" + err)
    })

    posImpressionismo.save()
    .then(() =>{
        console.log("Movimento salvo com sucesso")
    })
    .catch((err) =>{
        console.log("Erro ao salvar artista :" + err)
    })
})
