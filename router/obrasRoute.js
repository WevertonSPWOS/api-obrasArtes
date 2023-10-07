const express = require("express")
const rota = express.Router();
const Obra  = require("../model/obra/obraModel");

rota.get('/obra/todos', (req,res) =>{
    Obra.find()
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


rota.get('/obra/lista' , (req,res) =>{
    Obra.find()
    .then((resultado) => {
        if(resultado){

            const resultado_tratado = resultado.map(resultado => resultado.nomeObra)

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


 rota.get('/obra/:nome' , (req,res) => {

    Obra.find({nomeObra:req.params.nome})
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



module.exports = rota
