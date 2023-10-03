const express = require("express")

// importando os modelos
const artista    = require("../model/artista/artistaModel");
const obras      = require("../model/obra/obra");
const movimento  = require("../model/movimento/movimento")

const rota = express.Router();


// artista

rota.get("/artista", async(req, res) =>{
    try{
        await artista.find(((error, obras) =>{
            res.json(obras)
        }))
    }

    catch(error){
        res.json("Ocorreu algum erro")
    }
})


// rota para todas a obras
rota.get("/obras" ,async(req,res) =>{
   try{
    // buscando por meio do obras.find todas as obras disponíveis
    await obras.find(((error, obras) =>{
        res.json(obras)
    }))
   }

   catch(error){
    res.send("Ocorreu algum erro")
   }
   
   
})





rota.get("/artista/:nome", async(req,res) =>{
    try{
        await artista.findById((req.params.nome), ((nome) =>{
            res.json(nome)

        })
)
    }

    catch{
        res.json("Ocorreu algum erro")
    }
})

rota.get("/obras/:nome", async(req, res) => {
    try{
        // pegando a primeira obra que tiver o nome do atributo
        await obras.findOne((obras) =>{
            res.json(obras)
        })
    }

    catch(error){
        res.json("ocorreu algum erro")
    }
})



module.exports = rota