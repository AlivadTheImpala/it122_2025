import http from "node:http";
const port = process.env.PORT || 3000;

// Create a local server to receive data from
const server = http.createServer((req, res) => {
  const path = req.url.replace(/\/?(?:\?.*)?$/, "").toLowerCase();
  switch (path) {
    case "":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Homepage");
      break;
    case "/about":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("About");
      break;
    default:
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not Found");
      break;
  }
});

server.listen(port, () =>
  console.log(
    `server has started on port ${port}. http://localhost:${port}. Press Ctrl-C to terminate the server.`
  )
);
