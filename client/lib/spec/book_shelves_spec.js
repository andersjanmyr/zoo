(function() {
  describe('sanity', function() {
    return it('should return sane', function() {
      return expect(window.sanity()).toEqual('sane');
    });
  });
}).call(this);
