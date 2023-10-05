const mongoose = require('mongoose');
const artista = require("../artista/artistaModel")
const movimentoSchema = new mongoose.Schema({
  nomeMovimento:{
    type:String,
    required: true,
  },

  descricao:{
    type:String,
    required: true,
  },
//  pegando os nomes de artistas associados ao movimento por meio de uma array de obejtos
  fk_nomeArtista:[
    {
    type:String,
    required:true,
    ref:'Artista',
    validate: {
      validator: async function (value) {
       // const artista_validacao = await mongoose.model('Artista').find([{ nomeArtista: value }]);
        const artista_validacao = await artista.find({ nomeArtista: value});

        return !!artista_validacao;
      },
      message: 'Artista não encontrado.',
    }
  },

  {
    type:String,
    required:true,
    ref:'Artista',
    validate: {
      validator: async function (value) {
       // const artista_validacao = await mongoose.model('Artista').find([{ nomeArtista: value }]);
        const artista_validacao = await artista.find({ nomeArtista: value});

        return !!artista_validacao;
      },
      message: 'Artista não encontrado.',
    }


  }, 

  {
    type:String,
    required:true,
    ref:'Artista',
    validate: {
      validator: async function (value) {
       // const artista_validacao = await mongoose.model('Artista').find([{ nomeArtista: value }]);
        const artista_validacao = await artista.find({ nomeArtista: value});

        return !!artista_validacao;
      },
      message: 'Artista não encontrado.',
    }

  }

],

  

  movimentoIndex:{
    type: String,
    index : true,
    unique : true,
    required : true
  },

  data:{
    type: String,
  },
});

const Movimento = mongoose.model('Movimento', movimentoSchema);

module.exports = Movimento
