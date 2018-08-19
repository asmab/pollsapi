// server.js

var express = require('express');
var path = require('path');
//Create a new middleware function to serve files from within a given root directory
var serveStatic = require('serve-static');

app = express();
app.use(serveStatic(__dirname + "/dist"));

var port = process.env.PORT || 5000;
app.listen(port);

console.log('server started '+ port);