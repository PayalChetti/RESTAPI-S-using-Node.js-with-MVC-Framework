const express = require('express');
const router = express.Router(); //creating router
const productController = require('../controller/product');//productController is a module

router
.post('/', productController.createProduct)
.get('/',productController.getallProduct)
.get('/:id',productController.getProductwithId)
.put('/:id', productController.replaceProduct)
.patch('/:id', productController.updateProduct)
.delete('/:id',productController.deleteProduct);

exports.routes = router;