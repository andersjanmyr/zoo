(function() {
  describe('sanity', function() {
    return it('should return sane', function() {
      return expect(sanity()).toEqual('sane');
    });
  });
  describe('Animal', function() {
    beforeEach(function() {
      return this.animal = new Animal(tapir);
    });
    return it('should hold kind, name, and image', function() {
      expect(this.animal.get('kind')).toBe('Tapir');
      expect(this.animal.get('name')).toBe('Dan Ariely');
      return expect(this.animal.get('image')).toBe('/images/tapir.png');
    });
  });
  describe('AnimalView', function() {
    beforeEach(function() {
      this.animal = new Animal(tapir);
      return this.animalView = new AnimalView({
        model: this.animal
      });
    });
    it('should have a tag of div', function() {
      return expect(this.animalView.tagName).toBe('div');
    });
    it('should have a classname as animal', function() {
      return expect(this.animalView.className).toBe('animal');
    });
    it('should render the animal-template', function() {
      $('#container').append(this.animalView.render().el);
      expect($('#container .animal').size()).toBe(1);
      expect($('#container .animal h1').text()).toBe('Tapir');
      expect($('#container .animal h2').text()).toBe('Dan Ariely');
      return expect($('#container .animal img').attr('src')).toBe('/images/tapir.png');
    });
    it('should change when the model changes', function() {
      $('#container').append(this.animalView.render().el);
      expect($('#container .animal h2').text()).toBe('Dan Ariely');
      this.animal.set({
        name: 'Daniel Pink'
      });
      return expect($('#container .animal h2').text()).toBe('Daniel Pink');
    });
    return afterEach(function() {
      return $('#container').empty();
    });
  });
  describe('Animals', function() {
    beforeEach(function() {
      return this.animals = new Animals(animals);
    });
    it('should hold Animal models', function() {
      return expect(this.animals.model).toBe(Animal);
    });
    it('should contain three animals', function() {
      return expect(this.animals.size()).toBe(3);
    });
    return it('should have the kinds Tapir, Aardvark, and Sloth', function() {
      return expect(this.animals.pluck('kind')).toEqual(['Tapir', 'Aardvark', 'Sloth']);
    });
  });
  describe('AnimalsView', function() {
    beforeEach(function() {
      this.animals = new Animals(animals);
      return this.animalsView = new AnimalsView({
        collection: this.animals
      });
    });
    it('should have a tag of ul', function() {
      return expect(this.animalsView.tagName).toBe('ul');
    });
    it('should have a classname as animals', function() {
      return expect(this.animalsView.className).toBe('animals');
    });
    return describe('animals-template', function() {
      beforeEach(function() {
        return $('#container').append(this.animalsView.render().el);
      });
      it('should render', function() {
        return expect($('#container .animals').size()).toBe(1);
      });
      it('should render three children', function() {
        return expect($('#container .animals').children().size()).toBe(3);
      });
      it("should render three li's", function() {
        return expect($('#container .animals li').size()).toBe(3);
      });
      it('should be empty when the collection is reset', function() {
        expect($('#container .animals li').size()).toBe(3);
        this.animals.reset();
        return expect($('#container .animals li').size()).toBe(0);
      });
      it('should grow when an item is added to the collection', function() {
        expect($('#container .animals li').size()).toBe(3);
        this.animals.add(new Animal({
          kind: 'Platypus',
          name: 'Plato',
          image: ''
        }));
        return expect($('#container .animals li').size()).toBe(4);
      });
      it('should shrink when an item is removed from the collection', function() {
        expect($('#container .animals li').size()).toBe(3);
        this.animals.remove(this.animals.at(0));
        return expect($('#container .animals li').size()).toBe(2);
      });
      return afterEach(function() {
        return $('#container').empty();
      });
    });
  });
}).call(this);
