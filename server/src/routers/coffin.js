const express = require('express')
const Coffin = require('../models/coffin')
const { getStandardAdultCoffin, addCoffin } = require('../controllers/coffinControllers')

const Router = express.Router()

Router.post('/coffin', addCoffin)

module.exports = Router