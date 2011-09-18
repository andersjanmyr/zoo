do $ ->
  window.sanity = ->
    'sane'

  class window.Animal extends Backbone.Model
    incrAge: ->
      @set({'age': @get('age') + 1})

  class window.AnimalView extends Backbone.View
    template: _.template($('#animal-template').html())
    tagName: 'li'
    className: 'animal'

    events: 
      'click h3': 'incrAge'

    initialize: ->
      @model.bind('change', @render)
      @model.bind('remove', @remove, this)
      
    render: =>
      $(@el).html @template(@model.toJSON())
      this

    incrAge: =>
      @model.incrAge()
    
  class window.Animals extends Backbone.Collection
    model: Animal
    url: '/animals'

  class window.AnimalsView extends Backbone.View
    tagName: 'ul'
    className: 'animals'

    initialize: ->
      @collection.bind('reset', @render)
      @collection.bind('add', @renderOne)

    render: =>
      $animals = @$(@el)
      $animals.empty()
      @collection.each(@renderOne)
      return this

    renderOne: (animal) =>
      view = new AnimalView({model: animal})
      $animals = @$(@el)
      $animals.append(view.render().el)
      

  class window.ZooRouter extends Backbone.Router
    routes:
      '': 'zoo'
      'cage/:num': 'cage'

    zoo: ->
      console.log 'zoo'

    cage: (num) ->
      console.log 'cage', num

