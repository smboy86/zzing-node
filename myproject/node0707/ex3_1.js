// 실패 이 예문을 바로 실행시키면 돌아가지 않는다.
// 근데 왜 책에는 이렇게만 쓰여있는 걸까
// 바로 전 예제에 포함or 수정하란건지 이해가 안간다.
// 그냥 다음으로 넘어간다.
// example3b.js 를 실행해둔 상태로
// example4.js 를 실행하면
// 아까 실패와는 다르게 콘솔창에 finished request가 출력이 되긴 한다... 그냥 실패한걸로... 이해 안하고 넘어감 

/*
var http = require('http');

var options={
    host: 'localhost',
    port: 8124,
    path: '/?file=secondary',
    method:'GET'
};

var processPublicTimeline = function(response) {
    console.log('finished request');
};

for (var i = 0; i < 2000; i++){
    http.request(options, processPublicTimeline).end;
}
*/
var http = require('http');

//The url we want, plus the path and options we need
var options = {
   host: 'localhost',
   port: 8124,
   path: '/?file=secondary',
   method: 'GET'
};

var processPublicTimeline = function(response) {
   // finished? ok, write the data to a file
   console.log('finished request');
};

for (var i = 0; i < 2000; i++) {
   // make the request, and then end it, to close the connection
   http.request(options, processPublicTimeline).end();
}
