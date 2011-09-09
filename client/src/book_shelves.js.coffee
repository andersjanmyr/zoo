do $ ->
  window.sanity = ->
    'sane'

  class window.Book extends Backbone.Model

  class window.BookView extends Backbone.View
    template: _.template($('#book-template').html())
    tagName: 'div'
    className: 'book'

    initialize: ->
      _.bindAll(this, 'render')

    render: ->
      $(@el).html @template(@model.toJSON())
      this

console.log 'test'

