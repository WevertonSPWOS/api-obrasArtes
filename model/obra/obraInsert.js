const Obra = require("./model/obra")
const conectar_bd = require("./service/mongo_connect")

const Irises = new Obra({
    nomeObra:'Irises',
    fk_nomeArtista:'Vincent van Gogh',
    fk_nomeMovimento:'pós impressionismo',
    index:"irises",
    imagemUrl : "https://lh3.googleusercontent.com/ci/ALr3YSHfsWlDsBRaEV8rddfHDL86zDnknyJY81MkBRl9w76j-r8kjmT-Jl7zEuuVqbfj6tTatoS1Vbw=w864-h1120-dc-rw-v1"
})


const CountryRoadInProvenceByNight = new Obra({
    nomeObra : "Country road in Provence by night",
    fk_nomeArtista : "Vincent van Gogh",
    fk_nomeMovimento : "pós impressionismo"

})


Irises.save()
.then(() => console.log("Salvo com sucesso"))
.catch((err) => console.log(err))
