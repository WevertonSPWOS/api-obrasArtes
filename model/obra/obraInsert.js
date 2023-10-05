const Obra = require("./obraModel")
const mongoose = require('mongoose')


mongoose.connect("mongodb+srv://senai115:senai115@teste.8334gnw.mongodb.net/?retryWrites=true&w=majority",{
    dbName:"api_obraArtes"
})
.then(() =>{


    const novaObra = new Obra({
        nomeObra:'Mona Lisa',
        fk_nomeArtista:'Leonardo da Vinci',
        fk_nomeMovimento:'Renascimento',
        linkFoto:"blob:https://artsandculture.google.com/ec96adcc-2b43-4872-bde8-210f2ffe9e47",
        ano:1504,
        descricao:"sei lá",
        index:2
    })
    
    
    
    novaObra.save()
    .then(() => console.log("Salvo com sucesso"))
    .catch((err) => console.log(err))
    


})