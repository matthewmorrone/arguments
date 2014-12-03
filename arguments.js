// variation of: http://stackoverflow.com/questions/11851107/prototyping-arguments
// except uses Object.defineProperty 

var log = console.log.bind(console);

// var defaultDescriptor =  {configurable: true, enumerable: false};
Object.defineProperty(Object.prototype, "define", {configurable: true, enumerable: false, value: function(name, value) {
    Object.defineProperty(this, name, {configurable: true, enumerable: false, value: value});
}});
(function () {
    var i, methods;
    arguments.constructor.prototype = Array.prototype;
    methods = ['concat', 'join', 'pop', 'push', 'reverse', 'shift', 'slice', 'sort', 'splice', 'toString', 'unshift'];

    // convert to use defineProperties? 
    for (i = 0; i < methods.length; i += 1) {
        if (arguments.constructor.prototype.hasOwnProperty(methods[i]) === false) {
            arguments.constructor.prototype.define(methods[i], Array.prototype[methods[i]]);
        }
    }
}());
