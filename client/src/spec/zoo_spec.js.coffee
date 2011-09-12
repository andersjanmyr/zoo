describe 'sanity', ->
  it 'should return sane', ->
    expect(sanity()).toEqual('sane')

describe 'animal', ->
  beforeEach ->
    @animal = new Animal(tapir)

  it 'should hold kind, name, and image', ->
    expect(@animal.get('kind')).toBe 'Tapir'
    expect(@animal.get('name')).toBe 'Dan Ariely'
    expect(@animal.get('image')).toBe 'http://photos1.blogger.com/blogger2/3178/4156/259/gse_multipart28341.jpg'


describe 'animalView', ->
  beforeEach ->
    @animal = new Animal(tapir)
    @animalView = new AnimalView({model: @animal})

  it 'should hold a model', ->
    expect(@animalView.tagName).toBe 'div'
    expect(@animalView.className).toBe 'animal'

  it 'should render the animal-template', ->
    $('#container').append(@animalView.render().el)
    expect($('#container .animal').size()).toBe 1
    expect($('#container .animal h1').text()).toBe 'Tapir'
    expect($('#container .animal h2').text()).toBe 'Dan Ariely'

  it 'should change when the model changes', ->
    $('#container').append(@animalView.render().el)
    expect($('#container .animal h2').text()).toBe 'Dan Ariely'
    @animal.set({name: 'Daniel Pink'})
    expect($('#container .animal h2').text()).toBe 'Daniel Pink'


  afterEach ->
    $('#container').empty()

