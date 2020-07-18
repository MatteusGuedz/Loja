const multer = require('multer')
const connection = require('../database/connection') 
const path = require('path')
const crypto = require('crypto')
const fs = require('fs')

const hashFile = crypto.randomBytes(4).toString('HEX')

module.exports = {
  storage: multer.diskStorage({
    destination(request, file, callback){
    const Name = `${request.body.product_id}` 
    const NameFolder = `${Name}`
    const PathFolder =  path.resolve(__dirname, '..', '..', 'uploads','products', NameFolder)
    const subImageFolder1 = path.resolve(PathFolder, 'imageMain')
    const subImageFolder2 = path.resolve(PathFolder, 'imagesDetails')

    if(fs.existsSync(PathFolder)){
      callback('A pasta ja existe!', null);
    } else {

      fs.mkdirSync(PathFolder)
      if(fs.existsSync(PathFolder)){
        fs.mkdirSync(subImageFolder1)
         if(fs.existsSync(subImageFolder1)){
          fs.mkdirSync(subImageFolder2)
          
        }
      }

  
      if(fs.existsSync(subImageFolder1)){

        callback(null, subImageFolder1);
      }

    }
 
    },

    filename(request, file, callback){
     
      const fileName = `${hashFile}-${file.originalname}`

      callback(null, fileName)
    }
  })
}