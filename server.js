const express = require('express');
const path = require('path');
const jsonServer = require('json-server');

const server = express();

// You may want to mount JSON Server on a specific end-point, for example /api
// Optiona,l except if you want to have JSON Server defaults
// server.use('/api', jsonServer.defaults()); 
server.use('/api', jsonServer.router('mocks/data.json'));

// ...
// Serve static files....
server.use(express.static(__dirname + '/dist/ask-app'));

// Send all requests to index.html
server.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/ask-app/index.html'));
});

// default Heroku PORT
server.listen(process.env.PORT || 3000);