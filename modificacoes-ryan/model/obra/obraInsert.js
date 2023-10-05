const Obra = require("./model/obra")
const conectar_bd = require("./service/mongo_connect")

const novaObra = new Obra({
    nomeObra:'obra1',
    fk_nomeArtista:'artista1',
    fk_nomeMovimento:'movimento1',
    index:1
})

novaObra.save()
.then(() => console.log("Salvo com sucesso"))
.catch((err) => console.log(err))
