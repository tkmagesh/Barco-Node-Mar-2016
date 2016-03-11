var fs = require('fs'),
	path = require('path');
	
var staticResourceExtns = ['.html','.js','.xml','.json','.png','.jpg','.ico'];

function isStatic(resource){
	return staticResourceExtns.indexOf(path.extname(resource)) !== -1;
}

module.exports = function(resourcePath){
	return function(req, res, next){
		var resource = path.join(resourcePath, req.url.pathname);
		if (isStatic(resource)){
			if (!fs.existsSync(resource)){
				res.statusCode = 404;
				res.end();
				return;
			}
			fs.createReadStream(resource, {encoding : 'utf8'}).pipe(res);
		} else {
			next();
		}
	}
}