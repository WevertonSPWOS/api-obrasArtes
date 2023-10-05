const Artista = require("./artistaModel")
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://senai115:senai115@teste.8334gnw.mongodb.net/?retryWrites=true&w=majority",{
    dbName:"api_obrasArtes"
}).then(() => {

    const novoArtista = new Artista({
        nomeArtista:'Leonardo da Vinci',
        index:2,
        linkFoto:"https://upload.wikimedia.org/wikipedia/commons/archive/b/ba/20101125233907%21Leonardo_self.jpg"
    })
    
    novoArtista.save()
    .then(() =>{
        console.log("Artista salvo com sucesso")
    })
    .catch((err) =>{
        console.log("Erro ao salvar artista :" + err)
    })

})
