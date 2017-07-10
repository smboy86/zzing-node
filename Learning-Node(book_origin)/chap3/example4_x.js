//170707 smPark
//윈도우에서 실행시키니 Unix 소켓통신은 이대로 하면 오류가 난다는 책에 설명이 있다.
// 그래서 시동을 못해봄 ex5도 마찬가지 (P53)

// create server
// and callback function
var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {

  var query = require('url').parse(req.url).query;
  console.log(query);
  file = require('querystring').parse(query).file;

  // content header
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // increment global, write to client
  for (var i = 0; i<100; i++) {
    res.write(i + '\n');
  }

  // open and read in file contents
  var data = fs.readFileSync(file, 'utf8');
  res.write(data);
  res.end();
}).listen('/tmp/node-server-sock');
