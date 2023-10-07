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
  }
  
});

const Artista = mongoose.model('Artista', artistaSchema);

module.exports = Artista
