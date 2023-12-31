//Importando express para criar as rotas
const express = require("express")
const rota = express.Router();

//Importando os modelo
const Obra  = require("../model/obra/obraModel");

rota.get('/obra/todos', (req,res) =>{
    try{
        Obra.find()
        .sort({index:1})
        .then((resultado) => {
            if(resultado){
                res.setHeader('Cache-Control','max-age=360, s-maxage=360, stale-while-revalidate')
                res.status(200).json(resultado)
            }
    })}
    catch(err){
        res.status(500).json({"code": "500", "error": err});
    }
})


rota.get('/obra/lista' , (req,res) =>{
    
    try{
        Obra.find()
        .sort({index:1})
        .then((resultado) => {
            if(resultado){

                const resultado_tratado = {};
                    
                resultado.forEach((obra, index) => {
                    resultado_tratado[index + 1] = obra.nomeObra;
                });
                res.setHeader('Cache-Control','max-age=360, s-maxage=360, stale-while-revalidate')
                res.status(200).json(resultado_tratado)
            }
    })}
    catch(err) {
        res.status(500).json({"code": "500", "error": err});
    }
})


 rota.get('/obra/:nome' , (req,res) => {

    try{
        Obra.find({nomeObra:req.params.nome})
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

rota.use((req,res,next) => {res.status(404).json("Recurso não encontrado")})


module.exports = rota
