var http = require('http'),
	fs = require('fs'),
	url = require('url'),
	path = require('path');

var server = http.createServer(function(req, res){
	console.log('A new connection is established for - ', req.url);
	req.url = url.parse(req.url === '/' ? '/index.html' : req.url, true);
	console.log(req.url);
	var resource = path.join(__dirname, req.url.pathname);
	if (!fs.existsSync(resource)){
		res.statusCode = 404;
		res.end();
		return;
	}
	var stream = fs.createReadStream(resource, {encoding : 'utf8'});
	stream.pipe(res);
});

server.listen(8080);
