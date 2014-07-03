
/**
 * Module dependencies
 */

require('should');

/**
 * Test
 */

describe('exposer', function () {

  it('should expose all siblings', function () {
    require('./dir').should.eql({
      user: require('./dir/user'),
      post: require('./dir/post')
    });
  });

});
