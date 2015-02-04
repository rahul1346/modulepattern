var expect = require('chai').expect;
var main = require('../lib/main');

describe('main function', function (){

    it('should take argument for greetings', function() {
       var exec = require('child_process').exec;
       var name;

       exec('Rahul', function (error, stdout, stderr){
       name = stdout;
       });

       expect(main.greetings(name)).to.equal('hello Rahul');
    });

    it('should take argunent for goodbye', function() {
       var exec = require('child_process').exec;
       var name;

       exec('Rahul', function (error, stdout, stderr){
       name = stdout;
       });

       expect(main.goodbye(name)).to.equal('goodbye Rahul');
    });
});
