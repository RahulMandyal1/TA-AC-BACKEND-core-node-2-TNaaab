let fs = require('fs');
fs.writeFileSync('readme.txt' , " hey this  is the file you need to read");

let http =require('http');
let server = http.createServer(handleRequest);
function handleRequest(req, res){
    fs.createReadStream('./readme.txt').pipe(res);
}
server.listen(3000 ,'localhost' , ()=>{
    console.log('server start listening at 3000 port');
})
