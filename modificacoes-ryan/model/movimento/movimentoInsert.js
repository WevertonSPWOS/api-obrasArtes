const movimento = require("../movimento/movimento")
const conectar_bd = require("../../service/mongo_connect")


conectar_bd()

const posImpressionismo = new movimento({
    nomeMovimento : "pós impressionismo",
    descricao : "O pós-impressionismo é um movimento estético francês surgido no final do século XIX. Artistas pós-impressionistas, como Vincent van Gogh, valorizavam as emoções e sensações.",
    movimentoIndex : "posimpressionismo",
    data : "XIX"

})

