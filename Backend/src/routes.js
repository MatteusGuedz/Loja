const express = require('express');
const routes = express.Router();
const connection = require('./database/connection')
const ProductsController = require('./controllers/productsController')


routes.post('/products', ProductsController.create )
routes.put('/products/:id', ProductsController.update )
routes.delete('/products/:id', ProductsController.remove )
routes.get('/products', ProductsController.store)
routes.get('/products/:category', ProductsController.storeFilter)

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