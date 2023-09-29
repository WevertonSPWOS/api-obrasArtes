const mongoose = require('mongoose');

const artistaSchema = new mongoose.Schema({
  _id:{
    type:String,
    required: true,
    index: true
  },
});

const Artista = mongoose.model('Artista', artistaSchema);

module.exports = Artista
