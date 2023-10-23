const mongoose = require('mongoose');

const artistaSchema = new mongoose.Schema({
  nomeArtista:{
    type:String,
    required: true,
  },
  index:{
    type:Number,
    index:true,
    required:true,
    unique:true,
    interger: true
  },
  linkFoto:{
    type:String,
    required:true,
    unique:true
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
  
});

const Artista = mongoose.model('Artista', artistaSchema);

module.exports = Artista
