const mongoose = require('mongoose');

const movimentoSchema = new mongoose.Schema({
  nomeMovimento:{
    type:String,
    required: true,
    index: true,
  
  },
  descricaoMovimento:{
    type:String,
    required:true,
    unique:true
  },
  dataInicio:{
    type: Number,
    length: 4,
    required:true,    
    interger: true
  },
  dataTermino:{
    type: Number,
    length: 4,
    required:true,    
    interger: true
  }  

});

const Movimento = mongoose.model('Movimento', movimentoSchema);

module.exports = Movimento
