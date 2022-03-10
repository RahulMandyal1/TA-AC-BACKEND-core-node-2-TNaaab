let http = require("http");
let server = http.createServer(handleRequest);
var qs = require("querystring");

function handleRequest(request, response) {
  // making a variable in which we can store the  data  because right now we have no database connectivity
  // where we can store  the data
  let data = "";
  // getting  the body data
  request.on("data", (chunk) => {
    data += chunk;
  });

  request.on("end", () => {
    if (request.method === "POST" && request.url === "/form") {
      let result = qs.parse(data);
      console.log(JSON.stringify(result));
      response.end(JSON.stringify(result));
    }
    if (request.method === "POST" && request.url === "/json") {
      console.log(data);
      response.setHeader("Content-Type", "application/json");
      response.end(data);
    }
  });
}
server.listen(4444, "localhost", () => {
  console.log("server is running on the 4444 port");
});
