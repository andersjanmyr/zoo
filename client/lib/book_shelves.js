(function() {
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  $(function() {
    window.sanity = function() {
      return 'sane';
    };
    window.Book = (function() {
      __extends(Book, Backbone.Model);
      function Book() {
        Book.__super__.constructor.apply(this, arguments);
      }
      return Book;
    })();
    return window.BookView = (function() {
      __extends(BookView, Backbone.View);
      function BookView() {
        BookView.__super__.constructor.apply(this, arguments);
      }
      BookView.prototype.template = _.template($('#book-template').html());
      BookView.prototype.tagName = 'div';
      BookView.prototype.className = 'book';
      BookView.prototype.initialize = function() {
        _.bindAll(this, 'render');
        return this.model.bind('change', this.render);
      };
      BookView.prototype.render = function() {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
      };
      return BookView;
    })();
  })();
  console.log('test');
}).call(this);
