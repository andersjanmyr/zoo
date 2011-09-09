describe 'sanity', ->
  it 'should return sane', ->
    expect(sanity()).toEqual('sane')

describe 'Book', ->
  beforeEach ->
    @album = new Album(anders_books[0])

  it 'should hold title, author, and owner', ->
    expect(@album.title).toBe 'Predictably Irrational'
    expect(@album.author).toBe 'Dan Ariely'
    expect(@album.owner).toBe 'Anders Janmyr'


