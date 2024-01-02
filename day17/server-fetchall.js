const http = require('http');
const fs = require('fs');
const path = require('path');
const staticRoot = path.join(__dirname, "public");

const server = http.createServer((req, res) => {
    const filePath = path.join(staticRoot, req.url);
    fs.access(filePath,fs.constants.F_OK, (err) => {
        if(err){
            res.statusCode = 404;
            res.end("404 Not Found");
            return;
        }   
        fs.readFile(filePath, (err, data) => {
            if(err){
                res.statusCode = 500;
                res.end("500 Internal Server Error");
                return;
            }
            else {
                res.end(data);
            }
        }); 
    });
});

server.listen(3002, () => {
    console.log("Server is running at http://localhost:3002");
}
);
