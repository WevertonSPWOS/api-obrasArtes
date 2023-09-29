const mongoose = require('mongoose');

const movimentoSchema = new mongoose.Schema({
  _id:{
    type:String,
    required: true,
    index: true
  },
});

const Movimento = mongoose.model('Movimento', movimentoSchema);

module.exports = Movimento
