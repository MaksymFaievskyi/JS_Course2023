const http = require("http");
const path = require("path");
const os = require("node:os");

http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write("<h1>System information</h1>");
    response.write(`<div>Current user name: ${os.userInfo().username}</div>`);
    response.write(`<div>OS type: ${os.type()}</div>`);
    response.write(`<div>System work time: ${(os.uptime()/60).toFixed(2)} minutes</div>`);
    response.write(`<div>Current work directory: ${path.dirname(__filename)}</div>`);
    response.write(`<div>Server file name: ${path.basename(__filename)}</div>`);
 }).listen(5000);
 
 // Console will print the message
 console.log('Server running at http://127.0.0.1:5000/');
 