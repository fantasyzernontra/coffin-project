const app = require('./app')
const PORT = process.env.PORT || 5000
require('./src/db/mongoose')
require('dotenv').config()

app.listen(PORT, () => {
    console.log(`Server is listening on ${process.env.PORT}`)
})