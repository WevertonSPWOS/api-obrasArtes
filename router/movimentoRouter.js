//Importando express para criar as rotas
const express = require("express")
const rota = express.Router();

//Importando os modelos
const Movimento  = require("../model/movimento/movimentoModel")
const Obras = require("../model/obra/obraModel")
const Artista = require("../model/artista/artistaModel")

rota.get('/movimento/todos', async (req, res) => {
    try {
        // Pega todos os movimentos
        const listaMovimentos = await Movimento.find().lean().sort({ nomeMovimento: 1 });


        //Para cada movimento vai adicionar as Obras que estão relacionadas nele em um campo "obras", o mesmo ocorre com artista

        for (let movimento of listaMovimentos) {
            const obrasRelacionadas = await Obras.find({ fk_nomeMovimento: movimento.nomeMovimento }).sort({ nomeObra: 1 });
            const ArtistaRelacionados = await Artista.find({fk_nomeMovimento: movimento.nomeMovimento}).sort({nomeArtista: 1});

            //Enquanto houver algo nas listas para relacionar ele continua, caso contrário passa para o próximo movimento.

            if (obrasRelacionadas.length > 0) {
                movimento.obras = obrasRelacionadas;
            }
            if (ArtistaRelacionados.length > 0) {
                movimento.artistas = ArtistaRelacionados;
            }
        }

        res.setHeader('Cache-Control', 'max-age=360, s-maxage=360, stale-while-revalidate');
        res.json(listaMovimentos).status(200);
    
    } catch (err) {
        res.status(500).json({ "code": "500", "error": err });
    }
});

rota.get('/movimento/lista' , (req,res) =>{
    try{
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
    })}
    catch(err) {
        res.status(500).json({"code": "500", "error": err});
    }
})

rota.get('/movimento/:nome' , (req,res) => {

    try{
        Movimento.findOne({nomeMovimento:req.params.nome})
        .then((resultado) => {
            if(resultado.length > 0){
                res.setHeader('Cache-Control','max-age=360, s-maxage=360, stale-while-revalidate')
                res.status(200).json(resultado)
            }
            else{
                res.status(404).json({"code" : "404","Error:":"Resource not found"})            
            }
    })}

    catch(err) {
        res.status(500).json({"code": "500", "error": err});
    }
})

rota.get('/movimento/:name/obras', (req, res) => {

    try{
        Movimento.find({nomeMovimento:req.params.name})
            .then((movimento) => {
                if (movimento.length > 0) {
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
        })}
    catch(err) {
        res.status(500).json({"code": "500", "error": err});
    }
});


//exportando a rota
module.exports = rota
