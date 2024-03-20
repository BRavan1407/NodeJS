var http = require('http');
var fs = require('fs');
//create server 
var server = http.createServer(function (request, response) {
    var page = request.url;
    page = page.substring(1);
    console.log(page);
    fs.readFile(page, function (error, FileContent) {
        if (error == null) {
            response.writeHead(200,{'content-type':'text/html'});
            //no error occured
            response.write(FileContent);
            response.end();
        }
        else 
        {
            response.writeHead(404,{'content-type':'text/html'});
            response.write('<html><head></head><body><h1>Page not found</h1></body></html>');
            response.end();
        }
    })
});
server.listen(5000);
console.log('ready to accept request.....');