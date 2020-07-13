const express = require('express');
const routes = express.Router();
const connection = require('./database/connection')


routes.post('/products', async (req, res)=>{
const { 
   name,
   price,
   category,
   disponibility,
   originalPack,
   description,
   mark,
   productID,
   peso,
   dimensions,
   quantidade,
    } = req.body;

    const id = Math.random()

 await connection('products').insert({
  id,
  name,
   price,
   category,
   disponibility,
   originalPack,
   description,
   mark,
   productID,
   peso,
   dimensions,
   quantidade,
 })
 return res.json({ id, productID, disponibility});
})


routes.post('/offers', async (req, res)=>{
  const { 
      priceAnterior,
      priceNew,
      ref_product, 
  } = req.body;
  
      
  
   await connection('offers').insert({
    priceAnterior,
      priceNew,
      ref_product,
   })
   return res.json({priceAnterior,
    priceNew,
    ref_product, });
  })
  

module.exports = routes;