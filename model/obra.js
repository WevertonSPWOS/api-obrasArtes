const mongoose = require("mongoose");

const obraSchema = new mongoose.Schema({
    titulo: String,
    ano: Number,
    artista_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Artista'  // Referência ao modelo Artista
    },
    movimento_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Movimento'
    }
  });

const Obra = mongoose.model('Obra', obraSchema);

module.exports = Obra