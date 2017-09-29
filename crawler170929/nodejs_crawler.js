var client = require('cheerio-httpcli');

var word = '열혈썽민';
 
client.fetch('http://www.google.com/search', { q: word }, function (err, $, res, body) {
	if (!err && res.statusCode == 200) {
		//console.log(res.headers); 
		console.log($('title').text());


		$('#rso ._NId .srg .g .rc .r a').each(function (idx) {
			console.log(idx + '   ' + $(this).text());
		});
	}
});