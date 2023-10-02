const mongoose = require('mongoose');

const movimentoSchema = new mongoose.Schema({
  nomeMovimento:{
    type:String,
    required: true,
    index: true,
  },
});

const Movimento = mongoose.model('Movimento', movimentoSchema);

module.exports = Movimento
