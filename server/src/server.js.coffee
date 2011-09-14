#require.paths.unshift('./node_modules')

express = require 'express'

server = express.createServer()

server.configure -> 
  server.use express.bodyParser()
  server.use express.methodOverride()
  server.use server.router
  client_dir = __dirname + '/../../client'
  console.log client_dir
  server.use express.static(client_dir)


#server.get '/', (request, response) ->
#  response.send PINGS

port = process.env.PORT or process.env.VMC_APP_PORT or 4000 
console.log "Starting on port #{port}"
server.listen(port)


animals = [
  { kind: 'Tapir', name: 'Dan Ariely', image: '/images/tapir.png' },
  { kind: 'Aardvark', name: 'Douglas Hofstadter', image: '' },
  { kind: 'Sloth',  name: 'Robert Pirsig', image: '' }
]

server.get '/animals', (request, response) ->
  console.log '/animals', animals
  response.send animals
