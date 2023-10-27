const Artista = require("./artistaModel")
const mongoose = require('mongoose')

mongoose.connect("",{
    dbName:""
}).then(() => {
    const salvadorDali = new Artista({
        nomeArtista:'Salvador Dalí',
        index:10,
        linkFoto:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Salvador_Dali_NYWTS.jpg/1570px-Salvador_Dali_NYWTS.jpg"
    })

    const maxErnst = new Artista({
        nomeArtista:'Max Ernst',
        index:11,
        linkFoto:"https://upload.wikimedia.org/wikipedia/commons/8/87/Max_Ernst_1968.jpg"
    })
    
    const joanMiro = new Artista({
        nomeArtista:'Joan Miró',
        index:12,
        linkFoto:"https://upload.wikimedia.org/wikipedia/commons/5/5c/Portrait_of_Joan_Miro%2C_Barcelona_1935_June_13.jpg"
    })

    const vanGogh = new Artista({
        nomeArtista:'Vincent van Gogh',
        index:13,
        linkFoto:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/1620px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg"
    })

    const paulCezanne = new Artista({
        nomeArtista:'Paul Cézanne',
        index:14,
        linkFoto:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Autoportrait_à_la_palette%2C_par_Paul_Cézanne%2C_Yorck.jpg/640px-Autoportrait_à_la_palette%2C_par_Paul_Cézanne%2C_Yorck.jpg"
    })

    const paulGauguin = new Artista({
        nomeArtista:'Paul Gauguin',
        index:15,
        linkFoto:"https://sothebys-com.brightspotcdn.com/42/6c/eb3c5dfc44688eb9e54e0ce59d58/gettyimages-640483675.jpg"
    })
    
    salvadorDali.save()
    .then(() =>{
        console.log("Artista salvo com sucesso")
    })
    .catch((err) =>{
        console.log("Erro ao salvar artista :" + err)
    })

    maxErnst.save()
    .then(() =>{
        console.log("Artista salvo com sucesso")
    })
    .catch((err) =>{
        console.log("Erro ao salvar artista :" + err)
    })

    joanMiro.save()
    .then(() =>{
        console.log("Artista salvo com sucesso")
    })
    .catch((err) =>{
        console.log("Erro ao salvar artista :" + err)
    })

    vanGogh.save()
    .then(() =>{
        console.log("Artista salvo com sucesso")
    })
    .catch((err) =>{
        console.log("Erro ao salvar artista :" + err)
    })

    paulCezanne.save()
    .then(() =>{
        console.log("Artista salvo com sucesso")
    })
    .catch((err) =>{
        console.log("Erro ao salvar artista :" + err)
    })

    paulGauguin.save()
    .then(() =>{
        console.log("Artista salvo com sucesso")
    })
    .catch((err) =>{
        console.log("Erro ao salvar artista :" + err)
    })
})

// Atualizando dados da nova coluna/chave-estrangeira fk_nomeMovimento
Artista.updateMany(
    { index: { $gte: 4, $lte: 6 } },
    { $set: { fk_nomeMovimento: 'Renascimento' } }
)
.then((result) => {
    console.log(`Atualização bem-sucedida. ${result.nModified} documentos atualizados.`);
})
.catch((err) => {
    console.error("Erro ao atualizar os documentos:", err);
});


Artista.updateMany(
    { index: { $gte: 7, $lte: 9 } },
    { $set: { fk_nomeMovimento: 'Modernismo' } }
)
.then((result) => {
    console.log(`Atualização bem-sucedida. ${result.nModified} documentos atualizados.`);
})
.catch((err) => {
    console.error("Erro ao atualizar os documentos:", err);
});


Artista.updateMany(
    { index: { $gte: 10, $lte: 12 } },
    { $set: { fk_nomeMovimento: 'Surrealismo' } }
)
.then((result) => {
    console.log(`Atualização bem-sucedida. ${result.nModified} documentos atualizados.`);
})
.catch((err) => {
    console.error("Erro ao atualizar os documentos:", err);
});
Artista.updateMany(
    { index: { $gte: 13, $lte: 15 } },
    { $set: { fk_nomeMovimento: 'Pós-Impressionismo' } }
)
.then((result) => {
    console.log(`Atualização bem-sucedida. ${result.nModified} documentos atualizados.`);
})
.catch((err) => {
    console.error("Erro ao atualizar os documentos:", err);
});
