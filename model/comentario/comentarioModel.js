const mongoose = require('mongoose');
const Obra = require("../obra/obraModel");

const { ajustarHora, ajustarMes, ajustarDia, ajustarAno } = require('../../controller/horario');

// Declarando o schema
var ComentarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    comentario: {
        type: String,
        required: true,
        maxlength: 500,
    },
    data_comentario: {
        type: Object,
        default: {
            horario: ajustarHora(),
            dia: ajustarDia(),
            mes: ajustarMes(),
            ano: ajustarAno(),
        },
    },
    fk_nomeObra: {
        type: String,
        required: true,
        ref: 'Obra',
        validate: {
            validator: async function (value) {
                const obra_validacao = await Obra.findOne({ nomeObra: value });
                return !!obra_validacao;
            },
            message: 'Movimento não encontrado.',
        },
    },
    nota: {
        type: String,
        enum: {
            values: ['1', '2', '3', '4', '5'],
            message: '{VALUE} não é uma nota válida.',
        },
    },
    index: {
        type: Number,
        unique:true,
        interger:true 
    },
});

ComentarioSchema.pre('save', async function (next) {
    if (this.isNew) {
        try {
            const lastComentario = await Comentario.findOne({}, 'index').sort({ index: -1 }).exec();
            if (lastComentario) {
                this.index = lastComentario.index + 1;
            } else {
                this.index = 1; // Caso não haja nenhum registro anterior
            }
        } catch (error) {
            return next(error);
        }
    }
    next();
});

// Exporte o modelo
module.exports = mongoose.model('Comentario', ComentarioSchema);
