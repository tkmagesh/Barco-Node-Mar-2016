var http = require('http'),
	dataParser = require('./dataParser'),
	staticServer = require('./staticServer'),
	calculatorReqHandler = require('./calculatorReqHandler'),
	notFoundActionHandler = require('./notFoundActionHandler'),
	path = require('path'),
	app = require('./app');

app.use(dataParser);
app.use(staticServer(path.join(__dirname, './public')));
app.use(calculatorReqHandler);
app.use(notFoundActionHandler);

http.createServer(app).listen(8080);