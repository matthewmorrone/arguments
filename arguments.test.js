var log = console.log.bind(console);

// I'll get around to learning expect.js/chai.js/mocha.js eventually
function test() {
  arguments.push(4);
  log(arguments);
}
test(1, 2, 3);
// Look! No clutter! 
