const express = require('express')
const app = express();
const routes = require('./routes')
require('dotenv/config');

app.use('/uploads', express.static('uploads'));
app.use(express.json())
app.use(routes)





module.exports = app