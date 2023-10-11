const Artista = require("./artistaModel")
const mongoose = require('mongoose')
const conectar_bd = require('../../service/mongo_connect')

conectar_bd()
.then(() => {

    const novoArtista = new Artista({
        nomeArtista:'Marcos teste',
        index:2,
        linkFoto:"Testando .env"
    })
    
    novoArtista.save()
    .then(() =>{
        console.log("Artista salvo com sucesso")
    })
    .catch((err) =>{
        console.log("Erro ao salvar artista :" + err)
    })

})
