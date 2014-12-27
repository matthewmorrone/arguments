(function () {
    var i, len, methods = Object.getOwnPropertyNames(Array.prototype);
    for (i = 0, len = methods.length; i < len; i += 1) {
        if (arguments.constructor.prototype.hasOwnProperty(methods[i]) === false) {
            Object.defineProperty(arguments.constructor.prototype, methods[i], {
                configurable: true, 
                enumerable: false, 
                value: Array.prototype[methods[i]]
            });
        }
        if (NodeList.prototype.hasOwnProperty(methods[i]) === false) {
            Object.defineProperty(NodeList.prototype, methods[i], {
                configurable: true, 
                enumerable: false, 
                value: Array.prototype[methods[i]]
            });
        }
    }
}());
