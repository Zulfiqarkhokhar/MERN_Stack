const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("This is Home Page");
  } else if (url === "/projects") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("This is Project Page");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("This page cannot be found");
  }
});

server.listen(9000, () => {
  console.log("Server is listening to 9000");
});
