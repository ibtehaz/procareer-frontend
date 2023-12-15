// let http = require('http')
// let url = require('url')
// let fs = require('fs')

// let server = http.createServer((req, res) => {

//     let fileName = url.parse(req.url).pathname // returns filename
//     console.log(fileName + " was requested")

//     switch (fileName) {
//         case '/index.html':
//             fs.readFile(__dirname + fileName, (error, data) => {
//                 res.writeHead(200, { 'Content-Type': 'text/html' })
//                 res.write(data)
//                 res.end()
//             })
//             break
//         default:
//             res.writeHead(200, { 'Content-Type': 'text/html' })
//             res.write('<h1>Hello World, this is the default page</h1>')
//             res.end()


//     }



// })

// server.listen(3000, '127.0.0.1', () => {
//     console.log('Server is running on port 3000')
// }
// )




// get the libraries
// create server , using req, res
// create proper response -- status, content type
// response end
// server to listen at a port


let http = require('http');
let url = require('url');
let fs = require('fs');


// get files and serve


 let myserver =  http.createServer( (request,response) => {
    // get the file name from url
    let filename = url.parse(request.url).pathname; // returns file name
    console.log("file name" +filename);
   
    switch(filename) {
        case '/':
            response.writeHead(200,{'Content-Type':'text/plain'});
            response.write("reached /. Welcome to node!");
            response.end();
            break;
        case '/index.html':
            // read the file using fs library
            fs.readFile(__dirname+filename, ( error, data) => {
                response.writeHead(200,{'Content-Type':'text/html'});
                response.write(data);
                response.end();
            });
            break;
        case '/about.html':
        // read the file using fs library
            fs.readFile(__dirname+filename, ( error, data) => {
            response.writeHead(200,{'Content-Type':'text/html'});
            response.write(data);
            response.end();
        });
        break;
        default:
            response.writeHead(200,{'Content-Type':'text/plain'});
            response.write("reached root. Welcome to node!");
            response.end();
    }
 });


// myserver.listen(3000,()=> console.log(' Listening at port 3000'));
myserver.listen(3002,'127.0.0.1',()=> console.log(' Listening at port 3002'));