(function() {
  var express, port, server;
  express = require('express');
  server = express.createServer();
  server.configure(function() {
    var client_dir;
    server.use(express.bodyParser());
    server.use(express.methodOverride());
    server.use(server.router);
    client_dir = __dirname + '/../../client';
    console.log(client_dir);
    return server.use(express.static(client_dir));
  });
  port = process.env.PORT || process.env.VMC_APP_PORT || 4000;
  console.log("Starting on port " + port);
  server.listen(port);
}).call(this);
