var http = require('http');

var server = http.createServer((request, response) => {
  //console.log(request);
  console.log(request.url);
  if (request.url == '/api/task') {
    response.statusCode = 200;
    response.end();
  } else {
    response.statusCode = 400;
    response.write("Hello World");
    response.end();
  }
});

server.listen(3000, () => { console.log("server is up & running") });