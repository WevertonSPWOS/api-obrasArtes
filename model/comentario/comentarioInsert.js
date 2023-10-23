const mongoose = require('mongoose')
const conectar_bd = require('../../service/mongo_connect')
const Comentario = require("../comentario/comentarioModel")


function inserirComentario(nome,nota,comentario,nomeObra){

conectar_bd()
.then(() => {

    const novoComentario = new Comentario({
        nome:nome,
        comentario:comentario,
        nota:nota,
        fk_nomeObra: nomeObra

    })

    novoComentario.save()

})}

module.exports = inserirComentario