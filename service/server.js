var express = require('express');
var bodyParser = require('body-parser');
var wrestle = require('./wrestle');

var server = express();

server.use(bodyParser.urlencoded({
    extended: true
}));
server.use(bodyParser.json());

server.use(function (req, res, next) {
  // allow origin for demo purposes
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  next();
});

server.post('/wrestle', function(req, res, next) {
  var data = req.body;
  var franchiseX = data.franchises[0];
  var franchiseY = data.franchises[1];

  return wrestle.wrestle(franchiseX.name, franchiseX.factors, franchiseY.name, franchiseY.factors)
    .then(function(winner) {
      res.send(winner);
    });
});

// Start listening
var PORT = 3001;
server.listen(PORT, function() {
  console.log('listening at %s', PORT);
});


