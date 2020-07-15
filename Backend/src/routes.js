const express = require('express');
const routes = express.Router();

const multer = require('multer')
const multerConfig = require('./config/multer')

const connection = require('./database/connection')
const ProductsController = require('./controllers/productsController')

const upload = multer(multerConfig)

routes.post('/products', upload.single('image'), ProductsController.createProduct )
routes.delete('/product', ProductsController.removeProduct )
routes.put('/product', ProductsController.updateProduct )
routes.get('/products', ProductsController.listProduct)
routes.get('/products/category/:category', ProductsController.listFilter)
routes.get('/product', ProductsController.listerUnic)

routes.post('/images', upload.single('image'), ProductsController.createImage )
routes.get('/images', ProductsController.listImages )
routes.get('/image', ProductsController.removeImage )

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