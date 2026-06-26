const http = require('http');

const server = http.createServer((req, res) => {
    let body = '';
    req.on('data', (chunk) => {
        body += chunk;
    });
    req.on('end', () => {
        console.log(body);
        res.end('Data Received');
    });
});

server.listen(3000);