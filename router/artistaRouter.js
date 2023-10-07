const express = require("express")

// importando os modelos
const Artista = require("../model/artista/artistaModel");
const Obras = require("../model/obra/obraModel")

const rota = express.Router();

// artista

rota.get('/artista/todos', (req,res) =>{
    Artista.find()
    .sort({index:1})
    .then((resultado) => {
        if(resultado){
            res.status(200).json(resultado)
        }
        else{
            res.status(404).json({"code" : "404","Error:":"Resource not found"})            
        }
    })
    .catch((err) =>{
        res.status(500).json({"code": "500", "error": err});
    })
})

rota.get('/artista/lista' , (req,res) =>{
    Artista.find()
    .sort({index:1})
    .then((resultado) => {
        if(resultado){

            const resultado_tratado = {};
                
            resultado.forEach((Artista, index) => {
                resultado_tratado[index + 1] = Artista.nomeArtista;
            });
            res.status(200).json(resultado_tratado)
            
        }
        else{
            res.status(404).json({"code" : "404","Error:":"Resource not found"})            
        }
    })
    .catch((err) =>{
        res.status(500).json({"code": "500", "error": err});
    })
})

rota.get('/artista/:nome' , (req,res) => {

    Artista.findOne({nomeArtista:req.params.nome})
    .then((resultado) => {
        if(resultado){

            res.status(200).json(resultado)
        }
        else{
            res.status(404).json({"code" : "404","Error:":"Resource not found"})            
        }
    })
    .catch((err) =>{
        res.status(500).json({"code": "500", "error": err});
    })
})

// Retorna o artista + as obras dele
rota.get('/artista/:name/obra', (req, res) => {

    Artista.find({nomeArtista:req.params.name})
        .then((artista) => {
            if (!artista) {
                return res.status(404).json({ message: 'Artista não encontrado' });
            }
            else{
                Obras.find({fk_nomeArtista:req.params.name})
                .sort({index: 1})
                .then((obras) =>{
                    res.status(200).json(obras)
                })
            }
           
        })
        .catch((err) => {
            res.status(500).json({ error: err.message });
        });
});





module.exports = rota