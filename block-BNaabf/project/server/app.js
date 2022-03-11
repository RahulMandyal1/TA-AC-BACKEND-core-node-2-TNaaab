// Adding the core node module in the  file  by requiring them 
let http = require('http');
let fs = require('fs');
let qs = require('querystring');
let path = require('path');
let server = http.createServer(handleRequest);

// - get relative path of `index.js` 
console.log('../client/index.js');
// - get absolute path of `index.js`
console.log(path.join(__dirname,'..','client/index.js'));
function handleRequest(request  , response){
    let data = "";
    // capturing the data inputed by the user  in the form 
    request.on('data',(chunk)=>{
        data+= chunk; 
    })
    if(  request.method ==='GET'&& request.url === '/form'){
        response.setHeader('Content-Type','text/html');
        fs.createReadStream('./form.html').pipe(response);
    }

    
   if(request.method==='POST' && request.url === '/form'){
       request.on('end',()=>{
        let result = qs.parse(data); 
        console.log(result);
        let finalData = JSON.stringify(result);
        response.end(finalData);
    })
   }

}
server.listen(5678 , 'localhost' ,()=>{
    console.log('server is running on the 5678 port ');
})