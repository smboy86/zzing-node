var http = require('http');
var fs = require('fs');

function writeNumbers(res){
    var counter = 0;

    for(var i = 0; i < 100 ; i++){
        counter++;
        res.write(counter.toString() + '\n');
    }
}

http.createServer(function(req, res){
    var query = require('url').parse(req.url).query;
    if (query != null)
        console.log(query.toString()); // GET 파라미터 받아 오는데 되게 복잡하게 하네.. ㅋ
    var app = require('querystring').parse(query).file + ".txt";

    res.writeHead(200, {'Content-Type':'text/plain'});

    writeNumbers(res);

    setTimeout(function(){
        console.log('opening ' + app);

        fs.readFile(app, 'utf-8', function(err, data){
            if(err)
                res.write('errrrr \n' + err);
            else
                res.write(data);
            
            res.end();
        });
    }, 2000);
}).listen(8124);

console.log('Server running at 8124')