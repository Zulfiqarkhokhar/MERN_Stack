const http = require("http");
const port = 9000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello Node Js From Http");
});

server.listen(port, () => {
  console.log(`Server is listening to port ${port}`);
});
