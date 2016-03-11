var http = require('http'),
	dataParser = require('./dataParser'),
	staticServer = require('./staticServer'),
	calculatorReqHandler = require('./calculatorReqHandler'),
	notFoundActionHandler = require('./notFoundActionHandler');


var server = http.createServer(function(req, res){
	dataParser(req, res);
	staticServer(req, res);
	calculatorReqHandler(req, res);
	notFoundActionHandler(req, res);	
});

server.listen(8080);
