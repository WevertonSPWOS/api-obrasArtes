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

rota.get("/artista/:nomeArtista", async(req,res) =>{
    try{
        const artistaNome = await artista.findOne({'nomeArtista' : req.params})

        res.status(200).json(artistaNome)
    }

    catch(error){
        res.json("Ocorreu algum erro" + error)
    }
})

rota.get("/obras/:nome", async(req, res) => {
    try{
        // pegando a primeira obra que tiver o nome do atributo
        await obras.findOne((obra) =>{
            res.json(obra)
        })
    }

    catch(error){
        res.json("ocorreu algum erro")
    }
})

rota.get("/movimento/:nome", async(req,res) =>{
    try{
        await movimento.findOne((movimento)=>{
            res.json(movimento)
        })
    }

    catch(error){
        res.json("Ocorreu algum erro em obter dados de " + req.params)
    }
})


module.exports = rota