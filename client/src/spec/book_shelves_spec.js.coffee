describe 'sanity', ->
  it 'should return sane', ->
    expect(sanity()).toEqual('sane')

describe 'Book', ->
  beforeEach ->
    @book = new Book(predIrr)

  it 'should hold title, author, and owner', ->
    expect(@book.get('title')).toBe 'Predictably Irrational'
    expect(@book.get('author')).toBe 'Dan Ariely'


describe 'BookView', ->
  beforeEach ->
    @book = new Book(predIrr)
    @bookView = new BookView({model: @book})

  it 'should hold a model', ->
    expect(@bookView.tagName).toBe 'div'
    expect(@bookView.className).toBe 'book'

  it 'should render the book-template', ->
    $('#container').append(@bookView.render().el)
    expect($('#container .book').size()).toBe 1
    expect($('#container .book h1').text()).toBe 'Predictably Irrational'
    expect($('#container .book h2').text()).toBe 'Dan Ariely'
  it 'should change when the model changes', ->
    $('#container').append(@bookView.render().el)
    expect($('#container .book h2').text()).toBe 'Dan Ariely'
    @book.set({author: 'Daniel Pink'})
    expect($('#container .book h2').text()).toBe 'Daniel Pink'


  afterEach ->
    $('#container').empty()

