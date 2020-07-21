const express = require('express')
const Router = express.Router()

const {
    getAllModernAdultCoffin,
    getOneModernAdultCoffin,
    setOneModernAdultCoffin,
    updateOneModernAdultCoffin
} = require('../controllers/modernAdultCoffin')

Router.get('/coffin/modernAdultOne', getOneModernAdultCoffin)

Router.get('/coffin/modernAdult', getAllModernAdultCoffin)

Router.post('/coffin/modernAdult/added', setOneModernAdultCoffin)

Router.patch('/coffin/modernAdult', updateOneModernAdultCoffin)

module.exports = Router