var express = require('express');
var app = express();
var httpServer = require('http').Server(app);
var io = require('socket.io')(httpServer);

app.use(express.static(__dirname));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('client message', function(msg){
    io.emit('server message', msg);
  });
});

httpServer.listen(3000, function(){
  console.log('listening on *:3000');
});
