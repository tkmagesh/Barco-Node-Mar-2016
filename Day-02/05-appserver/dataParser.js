var url = require('url');
module.exports = function(req, res){
	req.url = url.parse(req.url === '/' ? '/index.html' : req.url, true);
}