const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const app = express()
const passport = require('./config/passport')
require('dotenv/config')


app.use('/uploads', express.static('uploads'))
app.use(cors({
  origin: '*'
}))
app.use(express.json())
app.use(routes)





module.exports = app