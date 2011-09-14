describe 'sanity', ->
  it 'should return sane', ->
    expect(sanity()).toEqual('sane')

describe 'Animal', ->
  beforeEach ->
    @animal = new Animal(tapir)

  it 'should hold kind, name, and image', ->
    expect(@animal.get('kind')).toBe 'Tapir'
    expect(@animal.get('name')).toBe 'Dan Ariely'
    expect(@animal.get('image')).toBe '/images/tapir.png'


describe 'AnimalView', ->
  beforeEach ->
    @animal = new Animal(tapir)
    @animalView = new AnimalView({model: @animal})

  it 'should have a tag of li', ->
    expect(@animalView.tagName).toBe 'li'

  it 'should have a classname as animal', ->
    expect(@animalView.className).toBe 'animal'

  it 'should render the animal-template', ->
    $('#container').append(@animalView.render().el)
    expect($('#container .animal').size()).toBe 1
    expect($('#container .animal h1').text()).toBe 'Tapir'
    expect($('#container .animal h2').text()).toBe 'Dan Ariely'
    expect($('#container .animal img').attr('src')).toBe '/images/tapir.png'

  it 'should change when the model changes', ->
    $('#container').append(@animalView.render().el)
    expect($('#container .animal h2').text()).toBe 'Dan Ariely'
    @animal.set({name: 'Daniel Pink'})
    expect($('#container .animal h2').text()).toBe 'Daniel Pink'


  afterEach ->
    $('#container').empty()


describe 'Animals', ->
  beforeEach ->
    @animals = new Animals(animals)

  it 'should hold Animal models', ->
    expect(@animals.model).toBe Animal

  it 'should contain three animals', ->
    expect(@animals.size()).toBe 3

  it 'should have the kinds Tapir, Aardvark, and Sloth', ->
    expect(@animals.pluck('kind')).toEqual ['Tapir', 'Aardvark', 'Sloth']

describe 'AnimalsView', ->
  beforeEach ->
    @animals = new Animals(animals)
    @animalsView = new AnimalsView({collection: @animals})

  it 'should have a tag of ul', ->
    expect(@animalsView.tagName).toBe 'ul'

  it 'should have a classname as animals', ->
    expect(@animalsView.className).toBe 'animals'

  describe 'animals-template', ->

    beforeEach -> 
      $('#container').append(@animalsView.render().el)

    it 'should render', ->
      expect($('#container .animals').size()).toBe 1

    it "should render three li's", ->
      expect($('#container .animals li').size()).toBe 3

    it 'should be empty when the collection is reset', ->
      expect($('#container .animals li').size()).toBe 3
      @animals.reset()
      expect($('#container .animals li').size()).toBe 0

    it 'should grow when an item is added to the collection', ->
      expect($('#container .animals li').size()).toBe 3
      @animals.add(new Animal({kind: 'Platypus', name: 'Plato', image: ''}))
      expect($('#container .animals li').size()).toBe 4

    it 'should shrink when an item is removed from the collection', ->
      expect($('#container .animals li').size()).toBe 3
      animal = @animals.at(0)
      @animals.remove(animal)
      expect($('#container .animals li').size()).toBe 2

    afterEach ->
      $('#container').empty()

