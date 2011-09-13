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
    it('should hold a model', function() {
      expect(this.animalView.tagName).toBe('div');
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
    it('should contain three animals', function() {
      return expect(this.animals.size()).toBe(3);
    });
    return it('should have the kinds Tapir, Aardvark, and Sloth', function() {
      return expect(this.animals.pluck('kind')).toEqual(['Tapir', 'Aardvark', 'Sloth']);
    });
  });
}).call(this);
