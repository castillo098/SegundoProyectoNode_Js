var express = require("express")
var app = express()
app.use(express.static(__dirname + '/public'))


var server = app.listen(3000, () => {
  console.log("Servidor listo en 3000")
})