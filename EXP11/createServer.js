const http = require('http');

const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-type': "text/plain"});
    res.write("Welcome to VJIT\n");
    res.end("Thank you");
});

server.listen(9000);
console.log("Node.js Web server at port 5000 is running");