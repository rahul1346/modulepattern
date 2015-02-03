var greetme = require('./greet.js');

greetme.greetings('Rahul');
greetme.goodbye('Rahul');

// var argOne = process.argv[2];
// var argTwo = process.argv[3];

// greetme.greetings(argOne);
// greetme.goodbye(argTwo);

exports.greetings = function(name) {
    this.name = name;
    return ('hello ' + this.name);
}

exports.goodbye = function(name) {
    this.name = name;
    return ('goodbye ' + this.name);
}

process.argv.forEach(function(x){
    greetme.greetings(x);
});

process.argv.forEach(function(x){
    greetme.goodbye(x);
});

