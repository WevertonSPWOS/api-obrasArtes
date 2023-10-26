//Importando express para criar as rotas
const express = require("express")
const rota = express.Router();

// importando os modelos
const Artista = require("../model/artista/artistaModel");
const Obras = require("../model/obra/obraModel")


rota.get('/artista/todos', (req,res) =>{
    try{
        Artista.find()
        .sort({index:1})
        .then((resultado) => {
            if(resultado){
                res.setHeader('Cache-Control','max-age=360, s-maxage=360, stale-while-revalidate')
                res.status(200).json(resultado)
            }
        })
}
    catch(err) {
        res.status(500).json({"code": "500", "error": err});
    }
})

//Lista todos os artistas

rota.get('/artista/lista' , (req,res) =>{
    try{
        Artista.find()
        .sort({index:1})
        .then((resultado) => {
            if(resultado){

                const resultado_tratado = {};
                    
                resultado.forEach((Artista, index) => {
                    resultado_tratado[index + 1] = Artista.nomeArtista;
                });
                res.setHeader('Cache-Control','max-age=360, s-maxage=360, stale-while-revalidate')
                res.status(200).json(resultado_tratado)
                
            }
    })}
    catch(err) {
        res.status(500).json({"code": "500", "error": err});
    }
})

// Rota de pesquisar o artista pelo nome

rota.get('/artista/:nome' , (req,res) => {
   
    try{
        Artista.findOne({nomeArtista:req.params.nome})
        .then((resultado) => {
            if(resultado.length > 0){
                res.setHeader('Cache-Control','max-age=360, s-maxage=360, stale-while-revalidate')
                res.status(200).json(resultado)
            }
            else{
                res.status(404).json({"code" : "404","Error:":"Resource not found"})            
            }
    })}
    catch(err) {
        res.status(500).json({"code": "500", "error": err});
    }
})


// Retorna o artista + as obras dele

rota.get('/artista/:name/obras', (req, res) => {

    try{
        Artista.find({nomeArtista:req.params.name})
            .then((artista) => {
                if (artista.length == 0) {
                    return res.status(404).json({ message: 'Artista não encontrado' });
                }
                else{
                    Obras.find({fk_nomeArtista:req.params.name})
                    .sort({index: 1})
                    .then((obras) =>{
                        res.setHeader('Cache-Control','max-age=360, s-maxage=360, stale-while-revalidate')
                        res.status(200).json(obras)
                    })
                }
            
        })}
    catch(err){
        res.status(500).json({"code": "500", "error": err});

        };
});


module.exports = rota