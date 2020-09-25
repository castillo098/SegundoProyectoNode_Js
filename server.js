var express = require("express")
var app = express()
app.use(express.static(__dirname + '/public'))


var server = app.listen(2000, () => {
  console.log("Servidor listo en 2000")
})