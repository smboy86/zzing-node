var http = require('http');

http.createServer(function(req, res){
    res.writeHead(200, {'content-type':'text/plain'});
    res.end("Hello, smPark\n\nHello Node World");
}).listen(8133);

console.log('Server running on 8133');