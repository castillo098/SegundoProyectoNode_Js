var express = require("express")
var app = express()
app.use(express.static(__dirname + '/public'))

var port = process.env.PORT || 3000
var server = app.listen(2000, () => {
  console.log("Servidor listo en 2000")
})