var http = require("http");
var server = http.createServer(function(req,res){
    console.log(new Date());
});
portno = 5000;
server.listen(portno);
console.log(`Server is ready to accept request on port No ${portno}`);
