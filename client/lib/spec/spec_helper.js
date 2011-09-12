(function() {
  var books;
  window.predIrr = {
    title: 'Predictably Irrational',
    author: 'Dan Ariely',
    online: {
      provider: 'amazon',
      id: 0061353248
    }
  };
  window.zen = {
    title: 'Zen and the art of Motorcycle Maintenance',
    author: 'Robert Pirsig',
    owner: 'Anders Janmyr',
    online: {
      provider: 'amazon',
      id: 0061673730
    }
  };
  window.godel({
    title: 'Gödel, Escher, Bach',
    author: 'Douglas Hofstadter',
    owner: 'Anders Janmyr',
    online: {
      provider: 'amazon',
      id: 0465026567
    }
  });
  books = [predIrr, zen, godel];
}).call(this);
