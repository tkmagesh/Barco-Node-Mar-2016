var nodejsWebSocket = require("nodejs-websocket");
var server = nodejsWebSocket.createServer(function(connection){
	console.log('A new connection is established');
	connection.on("text", function(msg){
		console.log('message received -> ', msg);
		server.connections.forEach(function(con){
			if (connection !== con)
				con.sendText(msg);
		});
	});
});
server.listen(9090);
console.log('socket server listen on port 9090');