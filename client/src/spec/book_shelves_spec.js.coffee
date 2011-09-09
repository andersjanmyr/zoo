describe 'sanity', ->
  it 'should return sane', ->
    expect(sanity()).toEqual('sane')

describe 'Book', ->
  beforeEach ->
    @book = new Book(anders_books[0])

  it 'should hold title, author, and owner', ->
    expect(@book.get('title')).toBe 'Predictably Irrational'
    expect(@book.get('author')).toBe 'Dan Ariely'
    expect(@book.get('owner')).toBe 'Anders Janmyr'


describe 'BookView', ->
  beforeEach ->
    @book = new Book(anders_books[0])
    @bookView = new BookView({model: @book})

  it 'should hold a model', ->
    expect(@bookView.tagName).toBe 'div'
    expect(@bookView.className).toBe 'book'

  it 'should render the book-template', ->
    $('#container').append(@bookView.render().el)
    expect($('#container .book').size()).toBe 1
    expect($('#container .book h1').text()).toBe 'Predictably Irrational'
    expect($('#container .book h2').text()).toBe 'Dan Ariely'
    expect($('#container .book h3').text()).toBe 'Anders Janmyr'


