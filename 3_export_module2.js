var http = require("http");
var mod = require("./export_module1");
function dt (req,res){
    console.log(mod.date());
    console.log(mod.time());
    console.log(mod.dateTime());
}
var server = http.createServer((req,res) => dt(req,res));
server.listen(5000,function(){
    console.log('server started....');
});