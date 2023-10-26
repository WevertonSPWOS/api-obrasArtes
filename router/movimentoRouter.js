const express = require("express")
const rota = express.Router();

const Movimento  = require("../model/movimento/movimentoModel")

rota.get('/movimento/todos', (req,res) =>{
    Movimento.find()
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

rota.get('/movimento/lista' , (req,res) =>{
    Movimento.find()
    .then((resultado) => {
        if(resultado){

            let resultado_tratado = resultado.map((resultado) => resultado.nomeMovimento)

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

rota.get('/movimento/:nome' , (req,res) => {

    Movimento.findOne({nomeMovimento:req.params.nome})
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
