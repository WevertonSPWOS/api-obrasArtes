const express = require("express")

// importando os modelos
const Artista = require("../model/artista/artistaModel");

const rota = express.Router();

// artista

rota.get('/artista/todos', (req,res) =>{
    Artista.find()
    .then((resultado) => {
        if(resultado){
            res.status(200).send(resultado)
        }
        else{
            res.status(404).send({"code" : "404","Error:":"Resource not found"})            
        }
    })
    .catch((err) =>{
        res.status(500).send({"code": "500", "error": err});
    })
})

rota.get('/artista/lista' , (req,res) =>{
    Artista.find()
    .then((resultado) => {
        if(resultado){

            let resultado_tratado = resultado.map((resultado) => resultado.nomeArtista)

            res.status(200).send(resultado_tratado)
        }
        else{
            res.status(404).send({"code" : "404","Error:":"Resource not found"})            
        }
    })
    .catch((err) =>{
        res.status(500).send({"code": "500", "error": err});
    })
})

rota.get('/artista/:nome' , (req,res) => {

    Artista.findOne({nomeArtista:req.params.nome})
    .then((resultado) => {
        if(resultado){

            res.status(200).send(resultado)
        }
        else{
            res.status(404).send({"code" : "404","Error:":"Resource not found"})            
        }
    })
    .catch((err) =>{
        res.status(500).send({"code": "500", "error": err});
    })
})

// rota para todas a obras




module.exports = rota