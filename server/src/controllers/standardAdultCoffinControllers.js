const Coffin = require('../models/StandardAdultCoffin')

const getStandardAdultCoffin = async (req, res, next)  => {
    try {
    const coffin = await Coffin.find({})

    res.status(200).send(coffin)
    console.log(coffin)

    next()
    } catch (err) {
        console.log(err)
    }
}

const addCoffin = async (req, res, next) => {
    try {
        const coffin = new Coffin({
            _id: req.body._id,
            gender: req.body.gender,
            price: req.body.price
        })

        await coffin.save()

        res.send(coffin)
    } catch(err) {
        console.log(err)
    }
}

module.exports = {
    getStandardAdultCoffin,
    addCoffin
}