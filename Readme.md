# Backbone Lab

## 0. Setup 

Use one of the provided servers, Express (Node), Sinatra (Ruby),
or Jersey (Java)

### Node

    $ brew/aptitude install node.js
    $ curl http://npmjs.org/install.sh | sh
    $ npm install -g coffee-script
    $ npm install -g express

### Sinatra

    $ bash < <(curl -s https://rvm.beginrescueend.com/install/rvm) 
    $ DO WHAT THE INSTALLER TELLS YOU TO DO (update .profile)
    $ rvm install 1.9.2
    $ rvm use 1.9.2 --default
    $ gem install sinatra
    $ gem install guard guard-coffeescript


### Jersey

Do what you have to!



### Unpack the files.

    |-- client                                  # The client 
    |   |-- index.html                          # The application page.
    |   |-- lib                                 # The Javascript source
    |   |   |-- zoo.js                          # The application code.
    |   |   |-- jasmine-1.1.0.rc1               # Test support files
    |   |   |-- spec
    |   |   |   |-- zoo_spec.js                 # Spec files for the app
    |   |   |   `-- fixtures.js                 # Fixtures for the specs
    |   |   `-- vendor                          # Third party files
    |   |       |-- backbone.js
    |   |       |-- jquery-1.6.3.js
    |   |       |-- json2.js
    |   |       `-- underscore.js
    |   |-- Readme.md                           # This file
    |   |-- SpecRunner.html                     # The spec runner
      |   `-- src                               # The Coffescript source
    |       |-- zoo.js.coffee                   # The application code
    |       `-- spec
    |           |-- zoo_spec.js.coffee          # The Coffeescript specs
    |           `-- fixtures.js.coffee          # The Coffeescript fixtures
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


## 1. Fix the Animal

The first tests consists of creating a Backbone.Model. Enter the code
into the source file, Javascript or Coffeescript as you like. Look at
the spec file to see what needs to be done. Coffeescript is easier to
read.


## 2. Fix the AnimalView

In order to do this you need to create an AnimalView that takes an
Animal as a model parameter. You need to set the properties and you need
to update the template in the SpecRunner.html to hold the values you
need. You also need to setup the proper events to trigger on change.

## 3. Fix the Animals

Animals should be a collection holding animals :)

## 4. Fix the AnimalsView

The AnimalsView need to have the proper attributes set.

## 5. Fix the AnimalsView.render method

The AnimalsView should render all its sub-views when called. After
that you need to setup the event handling to make sure the view is
updated when the collection changes. You may need to make changes to
both the AnimalsView and the AnimalView.

## 6. Events, Handle click events on AnimalView

The Events spec contains a spec that will succeed when an animal's age
is incremented when it is clicked. Be sure to put the proper
functionality in the view and in the model.

## 7. Router, Create a router that will respond to the proper routes.

This spec is heavily dependent on mocks, even though the mocks are there
you are supposed to create the methods that will be called when the
proper route is selected.

## 8. Server, Setup communication with the server.

The Server specs will test the communication with the server.
It is dependent on some kind of restful service that responds to the
/animals path.



FEEL FREE TO IMPROVE THE DOCUMENTATION AS YOU COMPLETE THE SPECS!





