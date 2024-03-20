var http = require("http");
var module = require("./export_module1");
var server = http.createServer(function(req,res){
    console.log('server started...');
    console.log(module.date());
    console.log(module.time());
    console.log(module.dateTime());
});
var portno = 5000;
server.listen(portno);
console.log(`Server listn on port no. ${portno}`);