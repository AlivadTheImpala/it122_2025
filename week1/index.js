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

//a listener is added to the server telling it to listen for activity on port 3000. meanwhile http.createServer creates a new http server, it takes a function with two parameters as its argument. req contains details like the url, http method, headers. while res is used to send data back to the client (ie your browser page).
//
// We created the server locally and gave a port to listen to. req.url then, holds the part of the url following the host name and port number.
//
//  http://localhost:3000/about becomes /about

//im still unfamiliar with headers, but writeHead() contains a manually set status code for the particular routes and a description of the type of content being sent to the client.

//end() indicates that no more data will be written or sent and the response ends with the respective string in the switches.
