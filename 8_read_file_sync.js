var http = require("http");
var fs = require("fs");
var server = http.createServer(function(request,responce){
    var page = request.url;
    page = page.substring(1);
    console.log(page);

    try{
        var filecontent = fs.readFileSync(page);
        responce.writeHead(200,{'content-type':'text/html'});
        responce.write(filecontent);
        responce.end();
    }
    catch(error){
        responce.writeHead(404,{'content-type':'text/html'});
        responce.write('<html><head></head><body><h1>Page not found....</h1></body></html>');
        responce.end();
    }
});
server.listen(5000);
console.log(`ready to accept request on port no 5000.`);