var http = require('http'),
    h_w = require('./hello_world');
    port = 8000;

// Single function call from a different module.
h_w.hello_world();

// This will print the str 
var hello_world_str = 'Hello World';

// Create a server object.
var behavior = function (request, response) {
  // Provide a header with status code 200.
  response.writeHead(200, {"Content-Type": "text/plain"});
  
  // Url is the stuff behind the slash.
  response.write(request.url + '.\n');
  
  // These all work.
  // They print simple statements on the website.
  // Seems to write stuff to the console as well.
  response.write('Hello World 1.\n');
  response.write('Hello World 2.\n');
  
  // This outputs 'undefined 2.'
  // Q: Where does the stuff on the console come from?
  //    Two 'Hello World' statements will print every time.
  response.write(h_w.hello_world() + ' 3.\n');
  
  // This shows up in the browser.
  response.write(hello_world_str + ' 4.\n');
  
  // This shows up in the browser good.
  response.write(h_w.f_hello_world_str('Hello World') + ' 5.\n');
  
  // Need an end.
  // It never ends if end does not exist, just keeps waiting.
  response.end('Hello World 6.\n');
};

var server = http.createServer(behavior);
server.listen(port);
console.log('Listening on port ' + port + '.');

// To get to the website, put this url into a browser:
//   http://localhost:8000/
//   - replace 8000 with whatever port number
