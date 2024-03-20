var http = require("http");
var server = http.createServer(function (req, res) {
  // console.log('server started.....');
  let url = req.url;
  res.writeHead(200, { "content-type": "application/json" });
  let choghadiya = {};
  if (url === "/sunday") {
    choghadiya =  {
      day: ["Amrut", "Shubh", "Labh", "Char", "Kaal", "Rog", "Udveg", "Shool"],
      night: ["Amrut", "Shubh", "Labh", "Char", "Kaal", "Rog", "Udveg", "Shool"],
    };
  } else if (url === "/monday") {
    choghadiya = {
      day: ["Shubh", "Labh", "Char", "Kaal", "Rog", "Udveg", "Shool", "Amrut"],
      night: ["Shubh", "Labh", "Char", "Kaal", "Rog", "Udveg", "Shool", "Amrut"],
    };
  } else if (url === "/tuesday") {
        choghadiya = {
              day: ["Labh", "Char", "Kaal", "Rog", "Udveg", "Shool", "Amrut", "Shubh"],
              night: ["Labh", "Char", "Kaal", "Rog", "Udveg", "Shool", "Amrut", "Shubh"]
            };
  } 
  else if (url ==='/wednesday')
  {
        choghadiya = {
              day: ["Char", "Kaal", "Rog", "Udveg", "Shool", "Amrut", "Shubh", "Labh"],
              night: ["Char", "Kaal", "Rog", "Udveg", "Shool", "Amrut", "Shubh", "Labh"]
            }
  }
  else if (url ==='/thursday')
  {
        choghadiya = {
                  day: ["Kaal", "Rog", "Udveg", "Shool", "Amrut", "Shubh", "Labh", "Char"],
                  night: ["Kaal", "Rog", "Udveg", "Shool", "Amrut", "Shubh", "Labh", "Char"]
                }
  }
  else if (url ==='/friday')
  {
        choghadiya = {
                  day: ["Rog", "Udveg", "Shool", "Amrut", "Shubh", "Labh", "Char", "Kaal"],
                  night: ["Rog", "Udveg", "Shool", "Amrut", "Shubh", "Labh", "Char", "Kaal"]
                }
  }
  else if (url ==='/saturday')
  {
        choghadiya = {
                  day: ["Udveg", "Shool", "Amrut", "Shubh", "Labh", "Char", "Kaal", "Rog"],
                  night: ["Udveg", "Shool", "Amrut", "Shubh", "Labh", "Char", "Kaal", "Rog"]
                }
  }
  
  else {
    choghadiya = 'Please Enter valid input';
    console.log("Please enter valid entry");
  }
  
 
  res.write(JSON.stringify(choghadiya));
  res.end();
});
portno = 5000;
server.listen(portno);
console.log(`server is ready to accept request on port no ${portno}`);
