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
      @collection.bind('reset', @render);
      @collection.bind('add', @renderAnimal);
      @collection.bind('remove', @render);

    render: =>
      $animals = @$(@el)
      $animals.empty()
      @collection.each (@renderAnimal)
      return this

    renderAnimal: (animal) =>
      view = new AnimalItemView({model: animal})
      $animals = @$(@el)
      $animals.append(view.render().el)
      
    removeAnimal: (animal) =>
      console.log animal
      $animals = @$(@el)
      $animals.remove()
    
console.log 'test'

