// Getting some core modules
let http = require("http");
let qs = require("querystring");
let path = require("path");
let fs = require("fs");
let server = http.createServer(handleRequest);
let url = require("url");

let userDir = path.join(__dirname, "users/");
// Each user will be stored inside users dircetory by creating a file which will be based on user's username which should be unique.

// - POST method on `/users` -> to create user
// - GET method on `/users?username=xyz` -> to get a single user
// - PUT method on `/users?username=xyz` -> to update a user
// - DELETE method on `/users?username=xyz` -> to delete a user
function handleRequest(req, res) {
  //Getting the parsed url as the user request someting

  let store = "";
  let parsedUrl = url.parse(req.url, true);
  let userData = qs.parse(store);
  let stringifyData = JSON.stringify(userData);
  let parsedData = JSON.parse(stringifyData);
  req.on("data", (chunk) => {
    store += chunk;
  });
  req.on("end", () => {
    if (req.method === "POST" && req.url === "/users") {
      fs.open(userDir + "username.json", "wx", (err, fd) => {
        fs.write(fd, stringifyData, (err) => {
          fs.close(fd, (err) => {
            res.setHeader("Content-Type", "text/plain");
            res.end("user is created sucessfully");
          });
        });
      });
    }
    if (req.method === "PUT" && parsedUrl.pathname === "/users") {
      let username = parsedUrl.query.username;
      fs.open(userDir + username + ".json", "r+", (err, fd) => {
        fs.ftruncate(fd, (err) => {
          console.log(err);
        });
        fs.write(fd, stringifyData, (err) => {
          fs.close(fd, (err) => {
            res.setHeader("Content-Type", "text/plain");
            res.end("user is updated successfully");
          });
        });
      });
    }
    if (req.method === "PUT" && req.url === "/users") {
    }
    if (req.method === "DELETE" && req.url === "/users") {
      //here we are deleting  the user data based on a username
    }
  });
}
server.listen(9999, "localhost", () => {
  console.log("server is runnig on the 9999 port");
});
