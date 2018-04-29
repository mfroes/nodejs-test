// import express 
var express = require('express')
var app = express()

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';


require('./routes')(app)
var server ;
function start() {
  // server on port 8080
  server = app.listen(PORT, HOST, function () {
        console.log('App started on port 8080!');
  })
}

function stop() {
  server.close();
}

// auto-start server
start();