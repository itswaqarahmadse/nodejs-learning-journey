const myUrl = new URL(
    'https://example.com:3000/users?id=10&name=waqar'
);

console.log('href:', myUrl.href);
console.log('origin:', myUrl.origin);
console.log('protocol:', myUrl.protocol);
console.log('hostname:', myUrl.hostname);
console.log('port:', myUrl.port);
console.log('pathname:', myUrl.pathname);
console.log('search:', myUrl.search);