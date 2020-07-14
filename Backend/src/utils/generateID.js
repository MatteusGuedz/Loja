const crypto = require('crypto')

module.exports = function generateID(){
    return crypto.randomBytes(5).toString('hex')
}