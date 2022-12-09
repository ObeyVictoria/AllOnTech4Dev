const express = require("express")
const {routeManager} = require('./routes/rts.js')
const bcrypt = require('bcryptjs')
const dotenv = require('dotenv')
const app = express()
const saltRounds = bcrypt.genSaltSync(10)
const port = 4000
const cors = require('cors')

dotenv.config()
app.use(cors())

console.log(process.env.DATABASE_USER)
console.log(bcrypt.hashSync("password", saltRounds))
app.use('/',routeManager)

app.listen(port, () => {
    console.log('example app listening on port $[port]')
})