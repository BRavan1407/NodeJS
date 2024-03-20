var http = require("http");
var obj = require("./obj");
var server = http.createServer(function (req,res) {
    console.log(obj.username);
    console.log(obj.password);
    console.log(obj.database);
    console.log(obj.portno);
    console.log(obj.server);
});
server.listen(5000);
console.log('server has been started on portno - 5000');