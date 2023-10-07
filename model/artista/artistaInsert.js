const Artista = require("./artistaModel")
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://senai115:senai115@teste.8334gnw.mongodb.net/?retryWrites=true&w=majority",{
    dbName:"api_obrasArtes"
}).then(() => {

    const tarsilaDoAmaral = new Artista({
        nomeArtista:'Tarsila do Amaral',
        index:7,
        linkFoto:"https://upload.wikimedia.org/wikipedia/commons/f/f6/Tarsila_do_Amaral%2C_ca._1925.jpg"
    })
    const candidoPortinari = new Artista({
        nomeArtista:'Candido Portinari',
        index:8,
        linkFoto:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/C%C3%A2ndido_Portinari_%281962%29.tif/lossy-page1-709px-C%C3%A2ndido_Portinari_%281962%29.tif.jpg"
    })
    const anitaMalfatti = new Artista({
        nomeArtista:'Anita Malfatti',
        index:9,
        linkFoto:"https://upload.wikimedia.org/wikipedia/commons/1/14/Anita_Malfatti_jovem_%281912%29.jpg"
    })
    
    tarsilaDoAmaral.save()
    .then(() =>{
        console.log("Artista salvo com sucesso")
    })
    .catch((err) =>{
        console.log("Erro ao salvar artista: " + err)
    })
    candidoPortinari.save()
    .then(() =>{
        console.log("Artista salvo com sucesso")
    })
    .catch((err) =>{
        console.log("Erro ao salvar artista: " + err)
    })
    anitaMalfatti.save()
    .then(() =>{
        console.log("Artista salvo com sucesso")
    })
    .catch((err) =>{
        console.log("Erro ao salvar artista: " + err)
    })

})
