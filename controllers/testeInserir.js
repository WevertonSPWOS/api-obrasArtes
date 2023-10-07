const Artista = require("../model/artista/artistaModel")
const Movimento = require("../model/movimento/movimento")
const Obra = require("../model/obra/obra")
const conectar_bd = require("../service/mongo_connect")

conectar_bd()

//Inserir novos artista

const novoArtista = new Artista({
    nomeArtista:'artista1',
    index:1
})

// Inserir novos Movimentos

const novoMovimento = new Movimento({
    nomeMovimento:'movimento1',
    index:1
})

//

//Inserir novas obras

const novaObra = new Obra({
    nomeObra:'obra1',
    fk_nomeArtista:'artista1',
    fk_nomeMovimento:'movimento1',
    index:1
})

novaObra.save()
.then(() => console.log("Salvo com sucesso"))
.catch((err) => console.log(err))

