(function() {
  describe('sanity', function() {
    return it('should return sane', function() {
      return expect(sanity()).toEqual('sane');
    });
  });
  describe('animal', function() {
    beforeEach(function() {
      return this.animal = new Animal(tapir);
    });
    return it('should hold kind, name, and image', function() {
      expect(this.animal.get('kind')).toBe('Tapir');
      expect(this.animal.get('name')).toBe('Dan Ariely');
      return expect(this.animal.get('image')).toBe('http://photos1.blogger.com/blogger2/3178/4156/259/gse_multipart28341.jpg');
    });
  });
  describe('animalView', function() {
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
      return expect($('#container .animal h2').text()).toBe('Dan Ariely');
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
}).call(this);
