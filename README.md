argue
=====

Never write `Array.prototype.slice.call(arguments);` ever again! 

This is based on [this stack overflow question](http://stackoverflow.com/questions/11851107/prototyping-arguments), except this uses `Object.defineProperty(arguments.constructor.prototype, [functionName], {enumerable: false, configurable: true, value: [functionBody]})`, so you don't get clutter when iterating. All of the functions in `Object.getOwnPropertyNames(Array.prototype)` have been added as well. 

The only reason I know of not to modify `arguments` is the problem that this code snippet attempts to solve; before initializing this repository, I googled around to see if this had already been done or if there were any other reasons why this sort of thing is taboo (besides [this red box](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)) and found neither. If you know of either, please let me know! 

Obviously this only works on platforms with `Object.defineProperty`; until I include it here, you can use [es5-shims](https://github.com/es-shims/es5-shim) to use it elsewhere. 

