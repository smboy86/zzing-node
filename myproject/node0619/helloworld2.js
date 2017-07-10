var http = require('http');
var fs = require('fs');

http.createServer(function (req, res){

    fs.readFile('myproject/node0619/helloworld.js', 'utf-8', function (err, date){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        if(err)
            res.write('errrrr\n' + err);
        else
            res.write(date);
        res.end();
    });
}).listen(8124, function(){ console.log('bound to 8124');});

console.log('running on 8124')