const http = require('http');

const server = http.createServer((req, res) => {

    const users = [
        {
            id: 1,
            name: 'Waqar'
        },
        {
            id: 2,
            name: 'Ali'
        }
    ];
    res.setHeader(
        'Content-Type',
        'application/json'
    );
    res.end(JSON.stringify(users));
});

server.listen(3000, () => {
    console.log('Server Running');
});