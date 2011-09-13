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

console.log 'test'

