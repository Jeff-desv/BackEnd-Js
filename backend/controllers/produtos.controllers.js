const req = require("express/lib/request");
const res = require("express/lib/response");
const Produto = require("../models/produto.Model");

exports.createProduto = async(req,res,next)=>{

    const produto = await Produto.create(req.body);

    res.status(201).json({
        sucess:true,
        produto
    })
}

exports.getAllProdutos = async (req,res) => {
    const produtos = await Produto.find();
    res.status(200).json({
        sucess: true,
        produto
    });
};

exports.updateProduto = async (req,res, next) => {

    let produto = await Produto.findById(req.params.id);

    if(!produto){
        return res.status(500).json({
            sucess: false,
            message:"Produto não Existe"
        })
    }
    produto = await Produto.findByIdAndUpdate (req.params.id, req.body,{
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        sucess: true,
        produto
    })
};

exports.deleteProduto = async (req,res, next) => {

    const produto = await Produto.findById(req.params.id);

    if(!produto){
        return res.status(500).json({
            sucess: false,
            message:"Produto não Existe"
        })
    }

    await produto.remove();

    res.status(200).json({
        sucess: true,
        message: "Produto Deletado com Sucesso!"
    })
};



   