var fs = require('fs'),
	path = require('path');
	
var staticResourceExtns = ['.html','.js','.xml','.json','.png','.jpg','.ico'];

function isStatic(resource){
	return staticResourceExtns.indexOf(path.extname(resource)) !== -1;
}

module.exports = function(req, res){
	var resource = path.join(__dirname, req.url.pathname);
	if (isStatic(resource)){
		if (!fs.existsSync(resource)){
			res.statusCode = 404;
			res.end();
			return;
		}
		var stream = fs.createReadStream(resource, {encoding : 'utf8'});
		stream.pipe(res);
	}
}