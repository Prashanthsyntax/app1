const http = require('http');
const os = require('os');
const path = require('path');
const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('requestReceived', (reqUrl) => {
    console.log(`Request received for: ${reqUrl}`);
});

const server = http.createServer((req, res) => {
    eventEmitter.emit('requestReceived', req.url);

    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to the custom Node.js server');
    } else if (req.url === '/osinfo') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            platform: os.platform(),
            architecture: os.arch(),
            freeMemory: os.freemem(),
            totalMemory: os.totalmem(),
            uptime: os.uptime()
        }, null, 2));
    } else if (req.url === '/pathinfo') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            currentFile: __filename,
            directory: __dirname,
            base: path.basename(__filename),
            ext: path.extname(__filename),
            absolutePath: path.resolve(__filename)
        }, null, 2));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

const PORT = 9000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
