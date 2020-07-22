const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const app = express()
const passport =  require('passport')

require('dotenv/config')
require('./config/passport')

app.use(passport.initialize())
app.use('/uploads', express.static('uploads'))
app.use(cors({
  origin: '*'
}))
app.use(express.json())
app.use(routes)





module.exports = app