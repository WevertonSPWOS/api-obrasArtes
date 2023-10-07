const express = require("express")
const rota = express.Router();

const Movimento  = require("../model/movimento/movimentoModel")
const Obras = require("../model/obra/obraModel")


rota.get('/movimento/todos', (req,res) =>{
    Movimento.find()
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

rota.get('/movimento/lista' , (req,res) =>{
    Movimento.find()
    .sort({index:1})
    .then((resultado) => {
        if(resultado){

            const resultado_tratado = {};
                
            resultado.forEach((Movimento, index) => {
                resultado_tratado[index + 1] = Movimento.nomeMovimento;
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

rota.get('/movimento/:nome' , (req,res) => {

    Movimento.findOne({nomeMovimento:req.params.nome})
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

rota.get('/movimento/:name/obra', (req, res) => {

    Movimento.find({nomeMovimento:req.params.name})
        .then((movimento) => {
            if (!movimento) {
                return res.status(404).json({ message: 'Movimento não encontrado' });
            }
            else{
                Obras.find({fk_nomeMovimento:req.params.name})
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
