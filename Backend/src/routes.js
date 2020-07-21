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
const RequestController = require('./controllers/requestController')



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
routes.post('/signup', UserController.signup)
routes.post('/signin', UserController.signin)


//requests
routes.post('/andress', RequestController.createAndress)
routes.post('/request', RequestController.createRequest)
routes.get('/requests', RequestController.listMyRequest)
routes.get('/andress', RequestController.listMysAndress)
routes.put('/andress', RequestController.updateAndress)
routes.put('/request', RequestController.updateRequest)
routes.delete('/andress', RequestController.removeAndress)

routes.get('/requests/all', RequestController.getAllRequests)
routes.get('/requests/search', RequestController.searchRequests)
routes.put('/requests/change', RequestController.changeStatus)

  

module.exports = routes;