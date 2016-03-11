var querystring = require('querystring'),
	calculator = require('./calculator');

module.exports = function(req, res, next){
	if (req.url.pathname === '/calculator'){
		var data = req.method === 'GET' ? req.url.query : req.body;
		var n1 = parseInt(data.n1, 10)
			n2 = parseInt(data.n2, 10),
			result = calculator[data.operation](n1, n2);
		res.write(result.toString());
		res.end();
	} else {
		next();
	}
}