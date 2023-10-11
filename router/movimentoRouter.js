const express = require("express")
const rota = express.Router();

const Movimento  = require("../model/movimento/movimentoModel")
const Obras = require("../model/obra/obraModel")


rota.get('/movimento/todos', async (req, res) => {
    try {
        // Pega todos os movimentos
        const listaMovimentos = await Movimento.find().lean().sort({ nomeMovimento: 1 });

        for (let movimento of listaMovimentos) {
            const obrasRelacionadas = await Obras.find({ fk_nomeMovimento: movimento.nomeMovimento }).sort({ nomeObra: 1 });

            if (obrasRelacionadas.length > 0) {
                movimento.obras = obrasRelacionadas;
            }
        }

        res.setHeader('Cache-Control', 'max-age=360, s-maxage=360, stale-while-revalidate');
        res.json(listaMovimentos);
    } catch (err) {
        res.status(500).json({ "code": "500", "error": err });
    }
});

rota.get('/movimento/lista' , (req,res) =>{
    Movimento.find()
    .sort({nomeMovimento:1})
    .then((resultado) => {
        if(resultado){

            const resultado_tratado = {};
                
            resultado.forEach((Movimento, index) => {
                resultado_tratado[index + 1] = Movimento.nomeMovimento;
            });
            res.setHeader('Cache-Control','max-age=360, s-maxage=360, stale-while-revalidate')
            res.status(200).json(resultado_tratado)
            
        }
        else{
            res.status(404).json({"code" : "404","Error:":"Resource not found"})            
        }
    })
    .catch((err) =>{
        res.status(500).json({"code": "500", "error": err});
    })
})

rota.get('/movimento/:nome' , (req,res) => {

    Movimento.findOne({nomeMovimento:req.params.nome})
    .then((resultado) => {
        if(resultado){
            res.setHeader('Cache-Control','max-age=360, s-maxage=360, stale-while-revalidate')
            res.status(200).json(resultado)
        }
        else{
            res.status(404).json({"code" : "404","Error:":"Resource not found"})            
        }
    })
    .catch((err) =>{
        res.status(500).json({"code": "500", "error": err});
    })
})

rota.get('/movimento/:name/obras', (req, res) => {

    Movimento.find({nomeMovimento:req.params.name})
        .then((movimento) => {
            if (!movimento) {
                return res.status(404).json({ message: 'Movimento não encontrado' });
            }
            else{
                Obras.find({fk_nomeMovimento:req.params.name})
                .sort({index: 1})
                .then((obras) =>{
                    res.setHeader('Cache-Control','max-age=360, s-maxage=360, stale-while-revalidate')
                    res.status(200).json(obras)
                })
            }
           
        })
        .catch((err) => {
            res.status(500).json({ error: err.message });
        });
});



module.exports = rota
