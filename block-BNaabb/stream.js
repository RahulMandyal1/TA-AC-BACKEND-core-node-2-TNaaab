let http = require("http");
let server = http.createServer(handleRequest);
function handleRequest(req, res) {
  let data = "";
  req.on("data", (chunk) => {
    data += chunk;
  });
  req.on("end", () => {
    // console.log("data ends here ");
    // console.log(data);
    res.setHeader("Content-Type", "text/plain");
    res.write(data);
    res.end();
  });
}
server.listen(3333, "localhost", () => {
  console.log("server is listening at 3333 port");
});