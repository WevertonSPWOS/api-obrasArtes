const Obra = require("./obraModel")
const mongoose = require('mongoose')


mongoose.connect("",{
    dbName:""
})
.then(() =>{


    const abaporu = new Obra({
        nomeObra:'Abaporu',
        fk_nomeArtista:'Tarsila do Amaral',
        fk_nomeMovimento:'Modernismo',
        linkFoto:"https://uploads3.wikiart.org/images/tarsila-do-amaral/abaporu-1928(1).jpg",
        ano:1928,
        descricao:'"Abaporu"—palavra da língua tupí-guaraní que significa “homem que come homem”— usa as cores da bandeira brasileira para representar uma criatura humanoide voltada para dentro, com pés gigantes próximos a um cacto e um sol, que também pode ser lido como a flor ou o fruto do cacto.',
        index:19
    })
    const romance = new Obra({
        nomeObra:'Romance',
        fk_nomeArtista:'Tarsila do Amaral',
        fk_nomeMovimento:'Modernismo',
        linkFoto:"https://uploads0.wikiart.org/00453/images/tarsila-do-amaral/1925romance.jpg",
        ano:1925,
        descricao:'A obra Romance faz parte de um período de transição entre as fases "Pau-Brasil" e "Antropofágica" da artista. A composição, baseada na simetria, geometriza elementos da natureza e utiliza as cores de modo incomum, uma das características da obra de Tarsila.',
        index:20
    })
    const urutu = new Obra({
        nomeObra:'Urutu',
        fk_nomeArtista:'Tarsila do Amaral',
        fk_nomeMovimento:'Modernismo',
        linkFoto:"https://uploads6.wikiart.org/00453/images/tarsila-do-amaral/1928urutu-viper-2.jpg",
        ano:1928,
        descricao:"Urutu é um dos símbolos mais importantes do Movimento Antropófago, iniciado em 1928, a partir de um manifesto escrito por Oswald de Andrade, e que marcou profundamente o desenvolvimento da arte brasileira.",
        index:21
    })
    const indiaEMulata = new Obra({
        nomeObra:'Índia e Mulata',
        fk_nomeArtista:'Candido Portinari',
        fk_nomeMovimento:'Modernismo',
        linkFoto:"https://uploads6.wikiart.org/images/candido-portinari/ndia-e-mulata-1934.jpg",
        ano:1934,
        descricao:"Índia e Mulata é um retrato marcante que faz parte do período em que o artista brasileiro foi influenciado pelo movimento modernista e retratava a diversidade e cultura do Brasil. Nesta pintura, vemos duas figuras femininas, uma indígena e outra de ascendência africana, representando a rica miscigenação racial do país.",
        index:22
    })
    const lavradorDeCafe = new Obra({
        nomeObra:'Lavrador de Café',
        fk_nomeArtista:'Candido Portinari',
        fk_nomeMovimento:'Modernismo',
        linkFoto:"https://uploads1.wikiart.org/images/candido-portinari/o-lavrador-de-caf-1939.jpg",
        ano:1939,
        descricao:"Em Lavrador de Café, Portinari nos apresenta uma figura emblemática da economia agrícola do Brasil, um Lavrador de Café.",
        index:23
    })
    const colhedoresDeCafe = new Obra({
        nomeObra:'Colhedores de Café',
        fk_nomeArtista:'Candido Portinari',
        fk_nomeMovimento:'Modernismo',
        linkFoto:"https://uploads1.wikiart.org/images/candido-portinari/colhedores-de-caf-1935.jpg",
        ano:1935,
        descricao:"Colhedores de Café é uma pintura emblemática que retrata vividamente a dura realidade do trabalho rural no Brasil durante o período modernista. Nesta obra, Portinari nos apresenta uma visão impactante de trabalhadores rurais carregando sacas de café em um cenário árido e quente.",
        index:24
    })
    const burrinhoCorrendo = new Obra({
        nomeObra:'Burrinho Correndo',
        fk_nomeArtista:'Anita Malfatti',
        fk_nomeMovimento:'Modernismo',
        linkFoto:"https://uploads7.wikiart.org/images/anita-malfatti/burrinho-correndo-1909.jpg",
        ano:1909,
        descricao:"Em Burrinho Correndo, um burro é retratado em movimento, com pinceladas fortes e cores vibrantes. O burro está com a boca aberta e os olhos arregalados, expressando um estado de agitação. O fundo da pintura é uma paisagem abstrata, que contribui para criar uma sensação de movimento e dinamismo.",
        index:25
    })
    const paisagemDeSantoAmaro = new Obra({
        nomeObra:'Paisagem de Santo Amaro',
        fk_nomeArtista:'Anita Malfatti',
        fk_nomeMovimento:'Modernismo',
        linkFoto:"https://uploads4.wikiart.org/images/anita-malfatti/paisagem-de-santo-amaro-1920.jpg",
        ano:1920,
        descricao:"A imagem retrata a paisagem de Santo Amaro.",
        index:26
    })
    const oFarol = new Obra({
        nomeObra:'O Farol',
        fk_nomeArtista:'Anita Malfatti',
        fk_nomeMovimento:'Modernismo',
        linkFoto:"https://uploads6.wikiart.org/images/anita-malfatti/o-farol-1915.jpg",
        ano:1915,
        descricao:"A obra retrata uma paisagem, onde o foco principal é o farol.",
        index:27
    })
    
    
    
    abaporu.save()
    .then(() => console.log("Salvo com sucesso"))
    .catch((err) => console.log(err))
    romance.save()
    .then(() => console.log("Salvo com sucesso"))
    .catch((err) => console.log(err))
    urutu.save()
    .then(() => console.log("Salvo com sucesso"))
    .catch((err) => console.log(err))
    indiaEMulata.save()
    .then(() => console.log("Salvo com sucesso"))
    .catch((err) => console.log(err))
    lavradorDeCafe.save()
    .then(() => console.log("Salvo com sucesso"))
    .catch((err) => console.log(err))
    colhedoresDeCafe.save()
    .then(() => console.log("Salvo com sucesso"))
    .catch((err) => console.log(err))
    burrinhoCorrendo.save()
    .then(() => console.log("Salvo com sucesso"))
    .catch((err) => console.log(err))
    paisagemDeSantoAmaro.save()
    .then(() => console.log("Salvo com sucesso"))
    .catch((err) => console.log(err))
    oFarol.save()
    .then(() => console.log("Salvo com sucesso"))
    .catch((err) => console.log(err))


})
