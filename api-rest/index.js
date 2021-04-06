// Dependencies
const http = require('http');

// Server should respond to all requests
const server = http.createServer(function (req, res) {
  // Get URL and parse it
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  console.log(parsedUrl);

  // Get the path
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, '');

  // Send the response
  res.end('Hello World\n');

  // Log the request path
  console.log(`Request received on path: ${trimmedPath}`);
});

// Start server, and have it listen on port
server.listen(3000, function () {
  console.log('Server is listening on port 3000');
});
