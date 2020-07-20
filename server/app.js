const express = require('express')
const app = express()
const CoffinRoute = require('./src/routers/coffin')

app.use(express.json())

app.use(CoffinRoute)

module.exports = app


