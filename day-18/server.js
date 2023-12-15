const http = require("http");
const fs = require("fs");
const path = require("path");
const staticRoot = path.join(__dirname, "public");

const server = http.createServer((req, res) => {
  const filePath = path.join(staticRoot, req.url);

  // Check if the requested file exists
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      // File not found
      res.statusCode = 404;
      res.end("404 Not Found");
    }
// Read and serve the file
      fs.readFile(filePath, (err, data) => {
        if (err) {
          // Error reading the file
          res.statusCode = 500;
          res.end('Internal Server Error');
        } else {
          // File successfully read
          res.statusCode = 200;
          res.end(data);
        }
      });
    });
});

server.listen(3002,()=> console.log(' Listening at port 3002'));