(function() {
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  }, __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  $(function() {
    var AnimalItemView;
    window.sanity = function() {
      return 'sane';
    };
    window.Animal = (function() {
      __extends(Animal, Backbone.Model);
      function Animal() {
        Animal.__super__.constructor.apply(this, arguments);
      }
      return Animal;
    })();
    window.AnimalView = (function() {
      __extends(AnimalView, Backbone.View);
      function AnimalView() {
        this.render = __bind(this.render, this);
        AnimalView.__super__.constructor.apply(this, arguments);
      }
      AnimalView.prototype.template = _.template($('#animal-template').html());
      AnimalView.prototype.tagName = 'div';
      AnimalView.prototype.className = 'animal';
      AnimalView.prototype.initialize = function() {
        return this.model.bind('change', this.render);
      };
      AnimalView.prototype.render = function() {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
      };
      return AnimalView;
    })();
    window.Animals = (function() {
      __extends(Animals, Backbone.Collection);
      function Animals() {
        Animals.__super__.constructor.apply(this, arguments);
      }
      Animals.prototype.model = Animal;
      return Animals;
    })();
    AnimalItemView = (function() {
      __extends(AnimalItemView, AnimalView);
      function AnimalItemView() {
        AnimalItemView.__super__.constructor.apply(this, arguments);
      }
      AnimalItemView.prototype.tagName = 'li';
      return AnimalItemView;
    })();
    return window.AnimalsView = (function() {
      __extends(AnimalsView, Backbone.View);
      function AnimalsView() {
        this.removeAnimal = __bind(this.removeAnimal, this);
        this.renderAnimal = __bind(this.renderAnimal, this);
        this.render = __bind(this.render, this);
        AnimalsView.__super__.constructor.apply(this, arguments);
      }
      AnimalsView.prototype.tagName = 'ul';
      AnimalsView.prototype.className = 'animals';
      AnimalsView.prototype.initialize = function() {
        this.collection.bind('reset', this.render);
        this.collection.bind('add', this.renderAnimal);
        return this.collection.bind('remove', this.render);
      };
      AnimalsView.prototype.render = function() {
        var $animals;
        $animals = this.$(this.el);
        $animals.empty();
        this.collection.each(this.renderAnimal);
        return this;
      };
      AnimalsView.prototype.renderAnimal = function(animal) {
        var $animals, view;
        view = new AnimalItemView({
          model: animal
        });
        $animals = this.$(this.el);
        return $animals.append(view.render().el);
      };
      AnimalsView.prototype.removeAnimal = function(animal) {
        var $animals;
        console.log(animal);
        $animals = this.$(this.el);
        return $animals.remove();
      };
      return AnimalsView;
    })();
  })();
  console.log('test');
}).call(this);
