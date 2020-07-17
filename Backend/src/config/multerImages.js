const multer = require('multer')
const path = require('path')
const crypto = require('crypto')
const fs = require('fs')

module.exports = {
  storage: multer.diskStorage({
    destination(request, file, callback){
      const NameFolder = `${request.query.product_id}`
      const PathFolder = path.resolve(__dirname, '..', '..', 'uploads','products', NameFolder, 'imagesDetails')
     
      callback(null, PathFolder)
    },

    filename(request, file, callback){
      const hash = crypto.randomBytes(4).toString('HEX')
      const fileName = `${hash}-${file.originalname}`

      callback(null, fileName)
    }
  })
}