const mongoose = require('mongoose');
const { Schema } = mongoose;

//schema is like configuration
const productSchema = new Schema({
    title: {type : String, required : true, unique : true },
    description: {type : String, required : true },
    price: {type : Number, required : true },
    discountPercentage: Number,
    rating: {type:Number, min:[0,'wrong rating'], max:[5, 'wrong rating']},
    stock: {type : Number, required : true },
    brand: {type : String, required : true },
    category: {type : String, required : true }
});

//model
exports.Product = mongoose.model('Product', productSchema);