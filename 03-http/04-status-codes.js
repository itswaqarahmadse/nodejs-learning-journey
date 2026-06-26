const http = require('http');

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.statusCode = 200;
        res.end('Success');

    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});

server.listen(3000);