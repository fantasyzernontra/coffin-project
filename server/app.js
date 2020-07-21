const express = require('express')
const app = express()

const StandardAdultCoffinRoute = require('./src/routers/standardAdultCoffin')
const ModernAdultCoffinRoute = require('./src/routers/modernAdultCoffin')

app.use(express.json())

app.use(StandardAdultCoffinRoute)

app.use(ModernAdultCoffinRoute)


module.exports = app


