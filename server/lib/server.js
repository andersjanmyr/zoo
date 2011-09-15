(function() {
  var animals, express, port, server;
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
  animals = [
    {
      kind: 'Tapir',
      name: 'Dan Ariely',
      image: '/images/tapir.png'
    }, {
      kind: 'Aardvark',
      name: 'Douglas Hofstadter',
      image: ''
    }, {
      kind: 'Sloth',
      name: 'Robert Pirsig',
      image: ''
    }
  ];
  server.get('/animals', function(request, response) {
    console.log('/animals', animals);
    return response.send(animals);
  });
  server.post('/animals', function(request, response) {
    var animal;
    animal = request.body;
    console.log('/animals', animal);
    animals.push(animal);
    return response.send(animal);
  });
}).call(this);
