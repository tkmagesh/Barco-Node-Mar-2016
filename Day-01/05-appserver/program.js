var http = require('http'),
	fs = require('fs'),
	url = require('url'),
	path = require('path'),
	calculator = require('./calculator');

var staticResourceExtns = ['.html','.js','.xml','.json','.png','.jpg','.ico'];

function isStatic(resource){
	return staticResourceExtns.indexOf(path.extname(resource)) !== -1;
}
var server = http.createServer(function(req, res){
	console.log('A new connection is established for - ', req.url);
	req.url = url.parse(req.url === '/' ? '/index.html' : req.url, true);
	console.log(req.url);
	var resource = path.join(__dirname, req.url.pathname);
	if (isStatic(resource)){
		if (!fs.existsSync(resource)){
			res.statusCode = 404;
			res.end();
			return;
		}
		var stream = fs.createReadStream(resource, {encoding : 'utf8'});
		stream.pipe(res);
	} else if (req.url.pathname === '/calculator') {
		var data = req.url.query;
		var n1 = parseInt(data.n1, 10)
			n2 = parseInt(data.n2, 10),
			result = calculator[data.operation](n1, n2);
		res.write(result.toString());
		res.end();
	} else {
		res.write('Dynamic resource - coming soon!!');
		res.end();
	}
});

server.listen(8080);
