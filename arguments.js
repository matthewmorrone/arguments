
// Object.defineProperty(Object.prototype, "define", {configurable: true, enumerable: false, value: function(name, value) {
//     Object.defineProperty(this, name, {configurable: true, enumerable: false, value: value});
// }});

(function () {
    var i, len, A = Array.prototype, methods = Object.getOwnPropertyNames(A);
    // Object.getOwnPropertyNames(Array.prototype) = [
    // "length", "constructor", "toString", "toLocaleString", "join", 
    // "pop", "push", "concat", "reverse", "shift", 
    // "unshift", "slice", "splice", "sort", "filter", 
    // "forEach", "some", "every", "map", "indexOf", 
    // "lastIndexOf", "reduce", "reduceRight", "entries", "keys"
    // ]

    arguments.constructor.prototype = A;

    // convert to use defineProperties? 
    for (i = 0, len = methods.length; i < len; i += 1) {
        if (arguments.constructor.prototype.hasOwnProperty(methods[i]) === false) {
            // arguments.constructor.prototype.define(methods[i], Array.prototype[methods[i]]);
            Object.defineProperty(arguments.constructor.prototype, methods[i], {
                configurable: true, 
                enumerable: false, 
                value: A[methods[i]]
            });
        }
    }
}());

