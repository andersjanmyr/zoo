do $ ->
  window.sanity = ->
    'sane'

  class window.Animal extends Backbone.Model

  class window.AnimalView extends Backbone.View
    template: _.template($('#animal-template').html())
    tagName: 'div'
    className: 'animal'

    initialize: ->
      _.bindAll(this, 'render')
      @model.bind('change', this.render)

    render: ->
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
      _.bindAll(this, 'render')
      this.collection.bind('reset', this.render);

    render: ->
      $animals = this.$(@el)
      $animals.empty()
      @collection.each (animal) ->
        view = new AnimalItemView({model: animal})
        $animals.append(view.render().el)

      return this;

    renderAnimal: ->
      view = new AnimalItemView({model: animal})
      $animals = this.$(@el)
      $animals.append(view.render().el)
      
    
console.log 'test'

