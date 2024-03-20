var http = require("http");
var server = http.createServer(function(req,res){
    // console.log('server started....');
    let url = req.url;
    res.writeHead(200,{'content-type':'application/json'});
    let bloodGroup = {};

    if(url === '/a+' || url === '/A+')
    {
        bloodGroup = { group: 'A+', compatibleWith: ['A+', 'A-', 'O+', 'O-'] }
    }
    else if (url === '/a-' || url === '/A-')
    {
        bloodGroup = { group: 'A-', compatibleWith: ['A-', 'O-'] }
    }
    else if (url === '/b+' || url === 'B+')
    {
        bloodGroup = { group: 'B+', compatibleWith: ['B+', 'B-', 'O+', 'O-'] }
    }
    else if (url === '/b-' || url === '/B-')
    {
        bloodGroup =  { group: 'B-', compatibleWith: ['B-', 'O-'] }
    }
    else if (url === '/ab+' || url === '/AB+')
    {
        bloodGroup = { group: 'AB+', compatibleWith: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'] }
    }
    else if (url === '/ab-' || url === '/AB-')
    {
        bloodGroup = { group: 'AB-', compatibleWith: ['A-', 'B-', 'AB-', 'O-'] }
    }
    else if (url === '/o+' || url ==='/O+')
    {
        bloodGroup =  { group: 'O+', compatibleWith: ['O+', 'O-'] }
    }
    else if (url === '/o-' || url === '/O-')
    {
        bloodGroup =  { group: 'O-', compatibleWith: ['O-'] }
    }
    else
    {
        bloodGroup = 'Enter Valid Blood Group'
        console.log('Enter Valid Blood Group');
    }
    res.write(JSON.stringify(bloodGroup));
    res.end();
});
portno = 5000;
server.listen(portno);
console.log(`server has been started on port no ${portno}`);