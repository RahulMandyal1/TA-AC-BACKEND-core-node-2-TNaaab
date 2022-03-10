let http = require("http");
let server = http.createServer(handleRequest);
var qs = require("querystring");

function handleRequest(request, response) {
  let requestHeader = request.headers["content-type"];
  // making a variable in which we can store the  data  because right now we have no database connectivity
  // where we can store  the data
  let data = "";
  // getting  the body data
  request.on("data", (chunk) => {
    data += chunk;
  });

  request.on("end", () => {
    if (requestHeader === "application/x-www-form-urlencoded") {
      let result = qs.parse(data);
      response.end(result);
    }
    if (requestHeader === "application/json") {
      response.end(data);
    }
  });
}
server.listen(9000, "localhost", () => {
  console.log("server is running on the 7000 port");
});
