var http = require("http");
var fs = require("fs");
var log = require("./9_write_file_async_log");
var server = http.createServer(function(request,responce){
    var page = request.url;
    page = page.substring(1);
    console.log(page);

    function logToFile(msg){
        var filename = read.log;
        fs.appendFile(filename,message + '\n',function(error){
            error ? console.log(error.code) : console.log('log entry done...');;
        });
    }

    try{
        var filecontent = fs.readFileSync(page);
        responce.writeHead(200,{'content-type':'text/html'});
        responce.write(filecontent);
        logToFile(first);
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