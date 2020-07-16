const express = require('express');
const routes = express.Router();

const multer = require('multer')
const multerConfigImages = require('./config/multerImages')
const multerConfigImage = require('./config/multerImage')

const connection = require('./database/connection')
const ProductsController = require('./controllers/productsController')

const uploadImages = multer(multerConfigImages)
const uploadImage = multer(multerConfigImage)

routes.post('/products', uploadImage.single('image'), ProductsController.createProduct )
routes.delete('/product', ProductsController.removeProduct )
routes.put('/product', ProductsController.updateProduct )
routes.get('/products', ProductsController.listProduct)
routes.get('/products/category/:category', ProductsController.listFilter)
routes.get('/product', ProductsController.listerUnic)

routes.post('/images', uploadImages.single('image'), ProductsController.createImage )
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