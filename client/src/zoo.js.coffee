do $ ->
  window.sanity = ->
    'sane'

  class window.Animal extends Backbone.Model

  class window.AnimalView extends Backbone.View
    template: _.template($('#animal-template').html())
    tagName: 'div'
    className: 'animal'

    initialize: ->
      @model.bind('change', @render)
      @model.bind('remove', @remove, this)
      
    render: =>
      $(@el).html @template(@model.toJSON())
      this
    
  class window.Animals extends Backbone.Collection
    model: Animal

  class AnimalItemView extends AnimalView
    tagName: 'li'

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
      view = new AnimalItemView({model: animal})
      $animals = @$(@el)
      $animals.append(view.render().el)
      
console.log 'test'

