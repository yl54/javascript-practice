/*
// This does not work for sharing functions 
//   with other modules.
var hello_world = function() {
  console.log('Hello World');
};
exports.hello_world;

// This function calls properly from here.
//hello_world();
*/

// -------------------------------------------
// -------------------------------------------

// This works.
exports.hello_world = function() {
  console.log('Hello World');
};

// This does not work here.
// hello_world();

// -------------------------------------------
// -------------------------------------------

exports.f_hello_world_str = function(message) {
  return message;
};

// -------------------------------------------
// -------------------------------------------