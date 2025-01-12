const fs = require('fs');
const model = require('../models/product');
const Product = model.Product;
const mongoose = require('mongoose');

exports.getallProduct = async (req,res)=>{
    const products = await Product.find({price:{$gt:500}});
    res.json(products);
   }

exports.getProductwithId = async(req,res)=>{
    const id = req.params.id; // + to convert string to number
    const product = await Product.findById(id);
    res.json(product);
   }

//Create
exports.createProduct = (req,res)=>{
    const product = new Product(req.body);
    product.save();
    res.status(201).json(req.body);
}

exports.updateProduct =  async(req,res)=>{
    const id = req.params.id; 
    try
    {
        const doc = await Product.findOneAndUpdate({_id:id},req.body,{new:true});
        res.status(401).json(doc);
    }
    catch(err)
    {
        console.log(err);
        res.status(404).json(err);
    }
}

exports.replaceProduct = async(req,res)=>{
    const id = req.params.id; 
    try{
        const doc = await Product.findOneAndReplace({_id:id},req.body,{new:true});
        res.status(401).json(doc);
    }
    catch(err)
    {
        console.log(err);
        res.status(404).json(err);
    }
}

exports.deleteProduct = async(req,res)=>{
    const id = req.params.id; 
    try{
        const doc = await Product.findOneAndDelete({_id:id});
        res.status(201).json(doc);
    }
    catch(err)
    {
        console.log(err);
        res.status(404).json(err);
    }
   
}