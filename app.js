// import express 
var express = require('express')
var app = express()

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';


require('./routes')(app)
//// root URL (/)
//app.get('/', function (req, res) {
//      res.send('Hello World')
//})

// server on port 8080
app.listen(PORT, HOST, function () {
      console.log('App started on port 8080!')
})

