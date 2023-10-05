const mongoose = require("mongoose");

// Existem 2 jeitos de referenciar uma chave primária no validador, o primeiro é como no Artista:

//- mongoose.model('NOME_TABELA').findOne({ NOME_ATRIBUTO: value })

// no outro é importando o SCHEMA de outra pasta e chamando ele direto:

// nome.findOne({NOME_ATRIBUTO: value})

const artista = require('../artista/artistaModel')   // referencia o modelo estrangeiro
const movimento = require('../movimento/movimentoModel') //referenciia o modelo estrangeiro

const obraSchema = new mongoose.Schema({
  nomeObra:{
    type:String,
    required: true,
  },
  fk_nomeArtista:{
    type:String,
    required:true,
    ref:'Artista',
    validate: {
      validator: async function (value) {
        const artista_validacao = await mongoose.model('Artista').findOne({ nomeArtista: value });
        // const artista_validacao = await artista.findOne({ nomeArtista: value });

        return !!artista_validacao;
      },
      message: 'Artista não encontrado.',
    }
  },
  fk_nomeMovimento:{
    type:String,
    required:true,
    ref:'Movimento',
    validate: {
      validator: async function (value) {
        const movimento_validacao = await movimento.findOne({ nomeMovimento: value });
        return !!movimento_validacao;
      },
      message: 'Movimento não encontrado.',
  }},
  ano:{
    type:Number,
    length: 4,
    interger: true,
    required:true
  },
  linkFoto:{
    type: String,
    required:true,
    unique:true
  },
  descricao:{
    type:String,
    required:true,
    unique:true
  },
  index:{
    type:Number,
    index:true,
    required:true,
    unique:true,
    integer: true
  },
  });

const Obra = mongoose.model('Obra', obraSchema);

module.exports = Obra