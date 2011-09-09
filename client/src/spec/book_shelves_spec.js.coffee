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
    @bookView = new BookView()

  it 'should hold a model', ->
    expect(@bookView.tagName).toBe 'div'
    expect(@bookView.className).toBe 'book'

  it 'should render the book-template', ->
    console.log @bookView.render()
