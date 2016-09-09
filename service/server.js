var express = require('express');
var bodyParser = require('body-parser');
var wrestle = require('./wrestle');

var server = express();
server.use(bodyParser.json());

server.use(function (req, res, next) {
  // allow origin for demo purposes
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  next();
});

server.get('/wrestle', function(req, res, next) {
  // Make a call to wrestling algorithm
  return wrestle.runMatch()
});

// Start listening
var PORT = 3001;
server.listen(PORT, function() {
  console.log('listening at %s', PORT);
});


