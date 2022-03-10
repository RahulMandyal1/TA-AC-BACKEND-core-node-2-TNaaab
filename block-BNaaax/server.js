// Complete path name From the root directory  means the absolute  path
console.log(__dirname);
console.log('./server.js');

// to use the join method  we need to require  the core node path module 
let absolutePath = __dirname;
let relativePath = './server.js';
let path = require('path');
console.log(path.join(absolutePath , relativePath));
