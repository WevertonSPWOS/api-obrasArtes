const express = require("express")

// importando os modelos
const artista    = require("../model/artista/artistaModel");
const obras      = require("../model/obra/obra");
const movimento  = require("../model/movimento/movimento")

const rota = express.Router();


// artista

rota.get("/artista", async(req, res) =>{
    try{
       const artistaBusca =  await artista.find();
       res.status(200).json(artistaBusca)
    }

    catch(error){
        res.json({"Ocorreu algum erro em obter dados de " : req.path})
        
    }
})


// rota para todas a obras
rota.get("/obras", async(req,res) =>{
   try{
    // buscando por meio do obras.find todas as obras disponíveis
    const obrasBusca = await obras.find();
    res.status(200).json(obrasBusca)
   }

   catch(error){
    res.json({"Ocorreu algum erro em obter dados de " : req.path})
   }
   
   
})

rota.get("/movimento" , async(req, res) =>{
    try{
        const movimentoBusca = await movimento.find();
        res.status(200).json(movimentoBusca)
    }

    catch (error){
        res.json({"Ocorreu algum erro em obter dados de " : req.path})
    }
})



// selecionando os valores pela sua chave

rota.get("/artista/:index", async(req,res) =>{
    try{
        const index = await artista.findOne({'index' : req.params.index})

        res.status(200).json(index)
    }

    catch(error){
        res.json("Ocorreu algum erro em obter dados de " + req.path)
    }
})

rota.get("/obras/:index", async(req, res) => {
    try{
        // pegando a primeira obra que tiver o nome do atributo
       const index = await obras.findOne({"index" : req.params.index})
       res.status(200).json(index)
    }

    catch(error){
        res.json("Ocorreu algum erro em obter dados de " + req.path)
    }
})

rota.get("/movimento/:movimentoIndex", async(req,res) =>{
    try{
        const indexMovimento = movimento.findOne({"movimentoIndex" : req.params.movimentoIndex})
        res.status(200).json(index)
    }

    catch(error){
        res.json("Ocorreu algum erro em obter dados de " + req.path)
    }
})


module.exports = rota