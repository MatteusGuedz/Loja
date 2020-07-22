const passport = require('passport')
const passportJwt = require('passport-jwt')
const connection = require('../database/connection') 
const { Strategy, ExtractJwt} = passportJwt

module.exports = () => {
  const params = {
    secretOrKey: process.env.SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  }

  const strategy =  new Strategy(params, (payload, done) => {

      connection('users')
        .where({id: payload.id})
        .first()
        .then( user => {

          if(user){
            done(null, {id: user.id, email: user.email, name: user.name})
          } else {
            done(null, false)
          }
            })
         .catch( err => done(err, false))
  })


  passport.use(strategy)

  return {
    initialize: () => passport.initialize(),
    authenticate: () => passport.authenticate('jwt'),
   
  }
}