let http = require("http");
let qs = require("querystring");
let path = require("path");
let fs = require("fs");
let server = http.createServer(handleRequest);

function handleRequest(req , res){
// to open a file asynchronously we use the open method 
let filePath = './file.txt';
console.log("Going to open file!");
fs.open(filePath, 'r+', function(err, fd) {
   if (err) {
      return console.error(err);
   }
   console.log("File opened successfully!");     
});
}
server.listen(4444 , 'localhost' ,()=>{
     console.log('server is runnig on the 4444 port');
})