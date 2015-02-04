var expect = require('chai').expect;
var greet = require('../lib/greet');

describe('greetings function', function() {
    
    it('should greet people', function() {
      expect(greet.greetings('Rahul')).to.equal('hello Rahul');
    });

    it('should say goodbye', function() {
      expect(greet.goodbye('Rahul')).to.equal('goodbye Rahul');
    });
});

