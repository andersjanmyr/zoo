(function() {
  describe('sanity', function() {
    return it('should return sane', function() {
      return expect(sanity()).toEqual('sane');
    });
  });
  describe('Book', function() {
    beforeEach(function() {
      return this.book = new Book(anders_books[0]);
    });
    return it('should hold title, author, and owner', function() {
      expect(this.book.get('title')).toBe('Predictably Irrational');
      expect(this.book.get('author')).toBe('Dan Ariely');
      return expect(this.book.get('owner')).toBe('Anders Janmyr');
    });
  });
  describe('BookView', function() {
    beforeEach(function() {
      return this.bookView = new BookView();
    });
    it('should hold a model', function() {
      expect(this.bookView.tagName).toBe('div');
      return expect(this.bookView.className).toBe('book');
    });
    return it('should render the book-template', function() {
      return console.log(this.bookView.render());
    });
  });
}).call(this);
