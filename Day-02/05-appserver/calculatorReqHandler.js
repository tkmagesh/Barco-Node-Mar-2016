var querystring = require('querystring'),
	calculator = require('./calculator');

module.exports = function(req, res, next){
	if (req.url.pathname === '/calculator' && req.method === 'GET') {
		var data = req.url.query;
		var n1 = parseInt(data.n1, 10)
			n2 = parseInt(data.n2, 10),
			result = calculator[data.operation](n1, n2);
		res.write(result.toString());
		res.end();
	} else if (req.url.pathname === '/calculator' && req.method === 'POST'){
		var dataString = '';
		req.on('data', function(chunk){
			dataString += chunk;
		});
		req.on('end', function(){
			var data = querystring.parse(dataString);
			var n1 = parseInt(data.n1, 10)
				n2 = parseInt(data.n2, 10),
				result = calculator[data.operation](n1, n2);
			res.write(result.toString());
			res.end();
		})
	} else {
		next();
	}
}