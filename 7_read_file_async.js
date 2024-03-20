var http = require("http");
var fs = require("fs");
var server = http.createServer(function(request,responce){
    responce.writeHead(200,{'content-type':'text/html'});
    var fileName = 'hanuman_chalisa.txt';
    fs.readFile(fileName,function(error,filecontent){
        responce.write(filecontent);
        responce.end();
    })
});
portno = 5000;
server.listen(portno);
console.log(`server ready to take request on port no ${portno}`);