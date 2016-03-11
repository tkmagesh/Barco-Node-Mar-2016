var url = require('url'),
	querystring = require('querystring');

module.exports = function(req, res, next){
	req.url = url.parse(req.url === '/' ? '/index.html' : req.url, true);
	req.body = {};
	if (req.method === 'POST'){
		var dataString = '';
		req.on('data', function(chunk){
			dataString += chunk;
		});
		req.on('end', function(){
			var data = querystring.parse(dataString);
			req.body = data;
			next();
		});
	} else {
		next();	
	}
}