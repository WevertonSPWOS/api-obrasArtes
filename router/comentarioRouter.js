const express = require("express")
const Comentario = require("../model/comentario/comentarioModel")
const Obra = require("../model/obra/obraModel")
const obraInserir = require("../model/comentario/comentarioInsert")

const rota = express.Router();

rota.get("comentario/todos", (req,res) =>{

    Comentario.find().sort({})
})

rota.post("/comentario/inserir",(req,res) => {

    let nome = req.body.nome
    let comentario = req.body.comentario
    let nota = req.body.nota
    let nomeObra = req.body.nomeObra

    console.log(nome,comentario,nota,nomeObra)
})


module.exports = rota
