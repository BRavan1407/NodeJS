var http = require("http");
var data = require("./mydata");
const { log } = require("console");
var server = http.createServer(function(req,res){
    console.log(data.name);
    console.log(data.mobile);
    console.log(data.getAddress());
});
server.listen(data.portno);
console.log('server has been started...');