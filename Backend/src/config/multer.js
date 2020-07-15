const multer = require('multer')
const path = require('path')
const crypto = require('crypto')

module.exports = {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'uploads','products' ),
    filename(request, file, callback){
      const hash = crypto.randomBytes(4).toString('HEX')
      const fileName = `${hash}-${file.originalname}`

      callback(null, fileName)
    }
  })
}