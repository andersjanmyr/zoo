(function() {
  describe('sanity', function() {
    return it('should return sane', function() {
      return expect(sanity()).toEqual('sane');
    });
  });
  describe('Book', function() {
    beforeEach(function() {
      return this.album = new Album(anders_books[0]);
    });
    return it('should hold title, author, and owner', function() {
      expect(this.album.title).toBe('Predictably Irrational');
      expect(this.album.author).toBe('Dan Ariely');
      return expect(this.album.owner).toBe('Anders Janmyr');
    });
  });
}).call(this);
