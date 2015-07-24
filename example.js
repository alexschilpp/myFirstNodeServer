var http = require('http');
var serverConfig = {
	hostname: "127.0.0.1",
	port: "1337"
}

var server = http.createServer(function (req, res) {

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');

});

var callback = function() {
	console.log('Server listening on '+serverConfig.hostname+':'+serverConfig.port +'...')
};

server.listen(serverConfig.port, serverConfig.hostname, undefined, callback);


