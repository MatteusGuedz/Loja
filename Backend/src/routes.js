const express = require('express');
const routes = express.Router();


//multer
const multer = require('multer')
const multerConfigImages = require('./config/multerImages')
const multerConfigImage = require('./config/multerImage')
const uploadImages = multer(multerConfigImages)
const uploadImage = multer(multerConfigImage)

//Controllers
const ProductsController = require('./controllers/productsController')
const UserController = require('./controllers/userController')



//products
routes.post('/products', uploadImage.single('image'), ProductsController.createProduct )
routes.delete('/product', ProductsController.removeProduct )
routes.put('/product', ProductsController.updateProduct )
routes.get('/products', ProductsController.listProduct)
routes.get('/products/category/:category', ProductsController.listFilter)
routes.get('/product', ProductsController.listerUnic)

routes.post('/images', uploadImages.single('image'), ProductsController.createImage )
routes.get('/images', ProductsController.listImages )
routes.get('/image', ProductsController.removeImage )


// users
routes.post('/users', UserController.save)

  

module.exports = routes;