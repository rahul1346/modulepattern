exports.greetings = function(name) {
    this.name = name;
    return ('hello ' + this.name);
}

exports.goodbye = function(name) {
    this.name = name;
    return ('goodbye ' + this.name);
}

