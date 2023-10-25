const Artista = require("./artistaModel")
const mongoose = require('mongoose')

mongoose.connect("",{
    dbName:""
}).then(() => {

    const leonardoDaVinci = new Artista({
        nomeArtista:'Leonardo da Vinci',
        index:4,
        linkFoto:"https://upload.wikimedia.org/wikipedia/commons/archive/b/ba/20101125233907%21Leonardo_self.jpg"
    })
    const sandroBotticelli = new Artista({
        nomeArtista:'Sandro Botticelli',
        index:5,
        linkFoto:"https://upload.wikimedia.org/wikipedia/commons/d/d4/Sandro_Botticelli_083.jpg"
    })
    const rafaelSanzio = new Artista({
        nomeArtista:'Rafael Sanzio',
        index:6,
        linkFoto:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Raffaello_Sanzio.jpg/1502px-Raffaello_Sanzio.jpg"
    })
    
    leonardoDaVinci.save()
    .then(() =>{
        console.log("Artista salvo com sucesso")
    })
    .catch((err) =>{
        console.log("Erro ao salvar artista: " + err)
    })
    sandroBotticelli.save()
    .then(() =>{
        console.log("Artista salvo com sucesso")
    })
    .catch((err) =>{
        console.log("Erro ao salvar artista: " + err)
    })
    rafaelSanzio.save()
    .then(() =>{
        console.log("Artista salvo com sucesso")
    })
    .catch((err) =>{
        console.log("Erro ao salvar artista: " + err)
    })

})
