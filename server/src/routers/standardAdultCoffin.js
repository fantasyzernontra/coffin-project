const express = require('express')
const Coffin = require('../models/StandardAdultCoffin')
const { getStandardAdultCoffin, addCoffin } = require('../controllers/standardAdultCoffinControllers')

const Router = express.Router()

Router.post('/coffin', addCoffin)

module.exports = Router