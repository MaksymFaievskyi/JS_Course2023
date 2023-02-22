const http = require("http");
const os = require("os");
var myModule = require('./personalmodule');

http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(myModule.func(os.userInfo().username));
 }).listen(5000);
 
 console.log('Server running at http://127.0.0.1:5000/');