var http = require("http");
var db1 = require("./cls");
var server = http.createServer(function(req,res){
    var data = new db1.db;
    data.insert('');
    data.delete('');
    data.select('');
    data.update('');
    

});
server.listen(5000,);