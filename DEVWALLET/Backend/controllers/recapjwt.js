const jwt = require("jsonwebtoken")
const key = "tech4dev"
var user = {userid: 1,username: "me"}
console.log(user)
var encoded = jwt.sign(user,key)
console.log(encoded)

const decoded = jwt.verify(encoded,key)
console.log(decoded)

console.log(decoded.iat)
const date = new Date(decoded.iat * 1000)
console.log(date)
// months = ['jan','feb','match','april','may','june','july','august','sept','oct','nov','dec']
//  const today =  new Date("2022-08-06")
//  console.log(months[today.getMonth()])