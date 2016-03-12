var http = require('http');
var fs = require('fs');
var path = require('path');
  var resourcePath = '';
var server = http.createServer(function(req, res){
  
    req.url = req.url === '/' ? "/index.html" : req.url
    if (path.extname(req.url) === '.html'){
        resourcePath = path.join(__dirname, req.url);
        fs.createReadStream(resourcePath).pipe(res);
    } else if (req.url === '/stream'){
        res.writeHead(200, {
            'content-type' : 'text/event-stream',
            'connection' : 'keep-alive',
            'Access-Control-Allow-Origin' : '*'
        });
        console.log('resourcePath -> ', resourcePath);
        fs.watchFile(resourcePath, function(){
            res.write('event: fileChange\n');
            res.write('data: index.html changed at ' + new Date().toString() + '\n\n');
        });
        setInterval(function(){
            res.write('event: message\n');
            res.write('data: ' + new Date().toString() + '\n\n');
        },3000);
    } else {
        res.statusCode = 404;
        res.end();
    }
});
server.listen(9090);
console.log('server listening on port 9090');
