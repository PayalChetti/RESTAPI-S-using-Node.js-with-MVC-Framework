require('dotenv').config();

const morgan = require('morgan');
const express = require('express');
const productRouter =  require('./routes/products');
const userRouter = require('./routes/users');
const mongoose = require('mongoose');

//db code
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
    console.log('Database connected!');
   }



const server = express();
server.use(express.json()); //to read body ,bodyparser
server.use(morgan('default'));
server.use(express.static(process.env.MAIN_PAGE)); //post any file from public folder
server.use('/products',productRouter.routes);
server.use('/users',userRouter.routes);


server.listen(process.env.SERVER,()=>{
    console.log('Server Started');
});
