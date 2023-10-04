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

  fotoArtista :{
    type: String,
    required : true
  },
  
});

const Artista = mongoose.model('Artista', artistaSchema);

module.exports = Artista
