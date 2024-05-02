var http = require("http");
var exp = require("./export");
var exp2 = require("./export2");
var server = http.createServer(function(req,res){
    console.log('server started');

    // exp.greet('Pooja Joshi');

    // console.log(exp.car.colour);
    // console.log(exp.car.name);
    // console.log(exp.car.year);
    // exp.car.service();

    console.log(exp2.Tutor,'\n'+exp2.course);
    console.log(exp2.today());

});

server.listen(exp.portno);
console.log('started');
