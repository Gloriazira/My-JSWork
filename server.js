var http = require('http');

var server = http.createServer(function(reg, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Listening...');
});

server.listen(8081, '127.0.0.1');
console.log('Pls wait while am listening...');