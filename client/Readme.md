# Backbone Lab

## 0. Setup 

### Unpack the files.


|-- client                                  # The client 
|   |-- index.html                          # The application page.
|   |-- lib                                 # The Javascript source
|   |   |-- book_shelves.js                 # The application code.
|   |   |-- jasmine-1.1.0.rc1               # Test support files
|   |   |-- spec
|   |   |   |-- book_shelves_spec.js        # Spec files for the app
|   |   |   `-- spec_helper.js              # Spec files
|   |   `-- vendor                          # Third party files
|   |       |-- backbone.js
|   |       |-- jquery-1.6.3.js
|   |       |-- json2.js
|   |       `-- underscore.js
|   |-- Readme.md                           # This file
|   |-- SpecRunner.html                     # The spec runner
  |   `-- src                               # The Coffescript source
|       |-- book_shelves.js.coffee
|       `-- spec
|           |-- book_shelves_spec.js.coffee
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
Open up the files `book_shelves_spec.js.coffee` and `book_shelves.js` or
`book_shelves.js.coffee`.


## 1. Fix, the first test, *Book should hold title, ...*

The first tests consists of creating a Backbone.Model. Enter the code
into the source file, Javascript or Coffeescript as you like. Look at
the spec file to see what needs to be done. Coffeescript is easier to
read.


## 2. 


