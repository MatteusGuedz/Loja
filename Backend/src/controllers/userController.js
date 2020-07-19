const connection = require('../database/connection') 
const bcrypt = require('bcrypt-nodejs')
const jwt = require('jwt-simple')


module.exports = {

  async signup(request, response){

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
      } = request.body

      const serializedUser  = {
        name,
        surname,
        email,
        password
      }

      const msg = `Sucesso no Cadastro!`
  
  
      await connection('users')
        .insert(serializedUser)
        .then(_ =>  response.status(204).send(msg))
        .catch( err => response.status(400).json(err))
      
      


    })


  
  },

  async signin(request, response){
      const {email, password} = request.body
        
      if(!email || !password){
        return response.status(400).send('Dados incompletos!')
      }

      const user = await connection('users')
            .where({email: email})
            .first()

      if(user){
        bcrypt.compare(password, user.password, (err, isMatch) => {

          if(err || !isMatch){
            return response.status(401).send()
          }

      const payload = {id: user.id}
        response.json({
            name: user.name,
            email: user.email,
            token: jwt.encode(payload, process.env.SECRET)
          })
        })

      } else {
       response.status(400).send('Usuario não encontrado!')
     }
  },





}