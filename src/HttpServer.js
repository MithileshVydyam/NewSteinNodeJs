const http = require('http');
const url = require('url');

const httpServer = http.createServer(function (req, res) {
  res.statusCode = 200;
  console.log(req.method);
  console.log(req.url);
  var parseUrl = url.parse(req.url, true);

  console.log(parseUrl.param);
  console.log(parseUrl.query);
  console.log(parseUrl.body);


  //console.log("AAAAA")
  res.end("AAA");
});

httpServer.listen(3000, () => {
  console.log("server started at port 3000")
});