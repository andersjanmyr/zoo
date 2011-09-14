# Backbone Lab

## 0. Setup 

Use one of the provided servers, Express (Node), Sinatra (Ruby),
or Jersey (Java)

## Node

    $ brew/aptitude install node.js
    $ curl http://npmjs.org/install.sh | sh
    $ npm install -g express

## Sinatra

    $ curl 
    $ DO WHAT THE INSTALLER TELLS YOU TO DO (update .profile)
    $ rvm install 1.9.2
    $ rvm use 1.9.2 --default
    $ gem install sinatra


## Jersey

Do what you have to!


### Unpack the files.


|-- client                                  # The client 
|   |-- index.html                          # The application page.
|   |-- lib                                 # The Javascript source
|   |   |-- zoo.js                          # The application code.
|   |   |-- jasmine-1.1.0.rc1               # Test support files
|   |   |-- spec
|   |   |   |-- zoo_spec.js                 # Spec files for the app
|   |   |   `-- spec_helper.js              # Spec files
|   |   `-- vendor                          # Third party files
|   |       |-- backbone.js
|   |       |-- jquery-1.6.3.js
|   |       |-- json2.js
|   |       `-- underscore.js
|   |-- Readme.md                           # This file
|   |-- SpecRunner.html                     # The spec runner
  |   `-- src                               # The Coffescript source
|       |-- zoo.js.coffee
|       `-- spec
|           |-- zoo_spec.js.coffee
|           `-- spec_helper.js.coffee
`-- server                                  # The server
    |-- lib
    |   |-- server.js                       # Node Javascript
    |   `-- server.rb                       # Sinatra Ruby
    `-- src
        `-- server.js.coffee                # Node Coffeescript

### Open SpecRunner.html

If you want to use LiveReload, open it from a server, otherwise it is
fine to open it as a file.

### Verify setup

Verify that the sanity spec is showing green, and that all other specs fails.
Open up the files `zoo_spec.js.coffee` and `zoo.js` or
`zoo.js.coffee`.


## 1. Fix, the first test, *Book should hold title, ...*

The first tests consists of creating a Backbone.Model. Enter the code
into the source file, Javascript or Coffeescript as you like. Look at
the spec file to see what needs to be done. Coffeescript is easier to
read.


## 2. 


