const movimento = require("../movimento/movimento")
const conectar_bd = require("../../service/mongo_connect")


conectar_bd()

const posImpressionismo = new movimento({
    nomeMovimento : "pós impressionismo",
    descricao : "O pós-impressionismo é um movimento estético francês surgido no final do século XIX. Artistas pós-impressionistas, como Vincent van Gogh, valorizavam as emoções e sensações.",
    fk_nomeArtista : ["Vincent van Gogh","Paul Cézanne","Camille Pissarro"],
    movimentoIndex : "posimpressionismo",
    data : "XIX"

})


posImpressionismo.save()
.then((posImpressionismo) =>  console.log(posImpressionismo))
.catch((error) => console.log(error))