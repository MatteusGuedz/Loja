const connection = require('../database/connection') 
const bcrypt = require('bcrypt-nodejs')


module.exports = {

  async save(request, response){

    const obterHash = (password, callback) => {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, null, (err, hash) => callback(hash))
      })
    }

      obterHash(request.body.password, async hash => {
      const password = hash

      const {
        name,
        surname,
        email,
      } = request.body;

      const serializedUser  = {
        name,
        surname,
        email,
        password
      }
  

        
      await connection('users').insert(serializedUser)
      return response.json(serializedUser)
      


    })


  
  },

}