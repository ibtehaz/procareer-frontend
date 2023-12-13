let http = require('http');
let myserver = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Hello World</h1>');
    res.end();
})

myserver.listen(3000, '127.0.0.1', () => {
    console.log('Server is running on port 3000');
}
)

