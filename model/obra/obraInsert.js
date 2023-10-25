const Obra = require("./obraModel")
const mongoose = require('mongoose')


mongoose.connect("",{
    dbName:""
})
.then(() =>{


    const monaLisa = new Obra({
        nomeObra:'Mona Lisa',
        fk_nomeArtista:'Leonardo da Vinci',
        fk_nomeMovimento:'Renascimento',
        linkFoto:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1374px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
        ano:1504,
        descricao:"Mona Lisa é um retrato de uma mulher com um sorriso enigmático que é considerada uma das obras de arte mais famosas do mundo. A identidade da mulher é desconhecida, mas acredita-se que seja Lisa del Giocondo, esposa de um rico comerciante de Florença. A pintura é notável por seu uso de técnicas de perspectiva inovadoras, seu realismo e seu sorriso enigmático.",
        index:10
    })
    const aUltimaCeia = new Obra({
        nomeObra:'A Última Ceia',
        fk_nomeArtista:'Leonardo da Vinci',
        fk_nomeMovimento:'Renascimento',
        linkFoto:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Leonardo_da_Vinci_%281452-1519%29_-_The_Last_Supper_%281495-1498%29.jpg/2560px-Leonardo_da_Vinci_%281452-1519%29_-_The_Last_Supper_%281495-1498%29.jpg",
        ano:1495,
        descricao:"A Última Ceia é um afresco que retrata a Última Ceia de Jesus Cristo com seus apóstolos. A pintura está localizada na parede do refeitório do Convento Santa Maria delle Grazie, em Milão, Itália. A Última Ceia é notável por seu uso de perspectiva, seu realismo e sua representação da dramática cena do anúncio de Jesus Cristo a seus apóstolos que um deles o trairia.",
        index:11
    })
    const anunciacao = new Obra({
        nomeObra:'Anunciação',
        fk_nomeArtista:'Leonardo da Vinci',
        fk_nomeMovimento:'Renascimento',
        linkFoto:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Annunciation_%28Leonardo%29_%28cropped%29.jpg/2560px-Annunciation_%28Leonardo%29_%28cropped%29.jpg",
        ano:1472,
        descricao:"Anunciação é um afresco que retrata o anúncio do nascimento de Jesus Cristo a Maria. A pintura está localizada na parede da igreja de Santa Maria delle Grazie, em Milão, Itália. A Anunciação é notável por seu uso de perspectiva, seu realismo e sua representação da figura angelical de Gabriel anunciando a Maria que ela seria a mãe do Salvador.",
        index:12
    })
    const oNascimentoDeVenus = new Obra({
        nomeObra:'O Nascimento de Vênus',
        fk_nomeArtista:'Sandro Botticelli',
        fk_nomeMovimento:'Renascimento',
        linkFoto:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/2560px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg",
        ano:1483,
        descricao:"O Nascimento de Vênus é uma pintura alegórica que retrata a deusa romana Vênus emergindo das ondas do mar. A pintura está localizada na Galeria Uffizi, em Florença, Itália. A obra é notável por seu uso de perspectiva, seu realismo e sua representação da figura idealizada de Vênus.",
        index:13
    })
    const aPrimavera = new Obra({
        nomeObra:'A Primavera',
        fk_nomeArtista:'Sandro Botticelli',
        fk_nomeMovimento:'Renascimento',
        linkFoto:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Botticelli-primavera.jpg/2560px-Botticelli-primavera.jpg",
        ano:1481,
        descricao:"A Primavera é uma pintura alegórica que representa a chegada da primavera. A pintura está localizada na Galeria Uffizi, em Florença, Itália. A obra é notável por seu uso de cores, seu simbolismo e sua representação das figuras mitológicas da Primavera, do Amor e da Vitória.",
        index:14
    })
    const aNatividadeMistica = new Obra({
        nomeObra:'A Natividade Mística',
        fk_nomeArtista:'Sandro Botticelli',
        fk_nomeMovimento:'Renascimento',
        linkFoto:"https://upload.wikimedia.org/wikipedia/commons/c/c5/The_Mystical_Nativity.jpg",
        ano:1500,
        descricao:"A Natividade Mística é uma pintura religiosa que retrata a Natividade de Jesus Cristo. A pintura está localizada na Galeria Uffizi, em Florença, Itália. A obra é notável por seu uso de perspectiva, seu realismo e sua representação da cena da Natividade.",
        index:15
    })
    const madonaSistina = new Obra({
        nomeObra:'Madona Sistina',
        fk_nomeArtista:'Rafael Sanzio',
        fk_nomeMovimento:'Renascimento',
        linkFoto:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/RAFAEL_-_Madonna_Sixtina_%28Gem%C3%A4ldegalerie_Alter_Meister%2C_Dresden%2C_1513-14._%C3%93leo_sobre_lienzo%2C_265_x_196_cm%29.jpg/1494px-RAFAEL_-_Madonna_Sixtina_%28Gem%C3%A4ldegalerie_Alter_Meister%2C_Dresden%2C_1513-14._%C3%93leo_sobre_lienzo%2C_265_x_196_cm%29.jpg",
        ano:1512,
        descricao:"Madona Sistina é uma pintura a óleo que representa a Virgem Maria com o Menino Jesus e São João Batista, em uma composição equilibrada e harmoniosa. A pintura é uma obra-prima do Renascimento italiano e é considerada uma das pinturas mais famosas do mundo.",
        index:16
    })
    const escolaDeAtenas = new Obra({
        nomeObra:'Escola de Atenas',
        fk_nomeArtista:'Rafael Sanzio',
        fk_nomeMovimento:'Renascimento',
        linkFoto:"https://upload.wikimedia.org/wikipedia/commons/c/c4/Escola_de_Atenas_-_Vaticano_2.jpg",
        ano:1519,
        descricao:"Escola de Atenas é um afresco que representa a filosofia e a vida intelectual da Grécia Antiga, em uma composição equilibrada e harmoniosa. A pintura é uma celebração do conhecimento e da razão, e é considerada uma das obras-primas do Renascimento italiano.",
        index:17
    })
    const transfiguracao = new Obra({
        nomeObra:'Transfiguração',
        fk_nomeArtista:'Rafael Sanzio',
        fk_nomeMovimento:'Renascimento',
        linkFoto:"https://upload.wikimedia.org/wikipedia/commons/5/51/Transfiguration_Raphael.jpg",
        ano:1517,
        descricao:"Transfiguração é uma pintura a óleo sobre tela que representa a transfiguração de Jesus Cristo, descrita no Novo Testamento da Bíblia. A pintura é dividida em duas partes: na parte superior, Jesus aparece em glória, rodeado por Moisés e Elias, e na parte inferior, os discípulos de Jesus estão tentando curar um menino possuído pelo demônio.",
        index:18
    })
    
    
    
    monaLisa.save()
    .then(() => console.log("Salvo com sucesso"))
    .catch((err) => console.log(err))
    aUltimaCeia.save()
    .then(() => console.log("Salvo com sucesso"))
    .catch((err) => console.log(err))
    anunciacao.save()
    .then(() => console.log("Salvo com sucesso"))
    .catch((err) => console.log(err))
    oNascimentoDeVenus.save()
    .then(() => console.log("Salvo com sucesso"))
    .catch((err) => console.log(err))
    aPrimavera.save()
    .then(() => console.log("Salvo com sucesso"))
    .catch((err) => console.log(err))
    aNatividadeMistica.save()
    .then(() => console.log("Salvo com sucesso"))
    .catch((err) => console.log(err))
    madonaSistina.save()
    .then(() => console.log("Salvo com sucesso"))
    .catch((err) => console.log(err))
    escolaDeAtenas.save()
    .then(() => console.log("Salvo com sucesso"))
    .catch((err) => console.log(err))
    transfiguracao.save()
    .then(() => console.log("Salvo com sucesso"))
    .catch((err) => console.log(err))


})
