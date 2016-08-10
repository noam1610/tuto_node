var http = require('http');

var server = http.createServer();



var data = '<div style="color: blue">Noam</div>';
server.on('request', function(request, response){
    console.log('noam');
    response.writeHead(200);
    response.end(data);
});

server.listen(2323);
