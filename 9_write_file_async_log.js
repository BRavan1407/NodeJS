var http = require("http");
var fs = require("fs");
var dt = require("./export_module1");
function logEntry(){
    var server = http.createServer(function(request,responce){
    // console.log('server is started');
    var time = dt.dateTime();
    var ip = request.socket.remoteAddress;
    var filecontent = `Time = ${time} , IP = ${ip} \n`;
    var fileName = 'report.log';

    responce.writeHead(200,{'content-type':'text/html'});
    fs.appendFile(fileName,filecontent,function(error){
        error ? console.log(error.code,error.message) : console.log('log entry done....');
        responce.end();
    });
});

portno = 5000;
server.listen(portno);
console.log(`Server is ready to accept request on port No ${portno}`);
};

module.exports.entry = logEntry;
