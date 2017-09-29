/*
	170929 
	smPark
	키보드로 입력 받아서 검색값 Title Text 획득 
	
	[문제]
	1. 두 번째 단어 검색시 setPrompt가 바로바로 지정이 안된다.
	2. 검색결과가 항상 10개가 아니라 더 적게 나타나기도 한다. 인터넷 속도 때문인가? setTimeout을 줘야하나..
*/

var client = require('cheerio-httpcli');
var readline = require('readline');


var r = readline.createInterface({
	input:process.stdin,
	output:process.stdout	
});


r.setPrompt('> ');
r.prompt();

r.on('line', function(line){
	if(line == 'exit'){
		r.close();
		
	}else{		
		client.fetch('http://www.google.com/search', { q: line }, function (err, $, res, body) {
			if (!err && res.statusCode == 200) {
				console.log($('title').text());
				
				$('#rso ._NId .srg .g .rc .r a').each(function (idx) {
					console.log(idx + '   ' + $(this).text());
				});
			}
		});
		
		r.setPrompt('다음 검색어 입력 > ');
	}
});

r.on('close', function(){
	console.log('종료합니다.');
	process.exit();
});