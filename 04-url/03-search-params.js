const myUrl = new URL(
    'https://example.com/users?id=10&name=waqar'
);

console.log(myUrl.searchParams.get('id'));
console.log(myUrl.searchParams.get('name'));
console.log(myUrl.searchParams.has('id'));
console.log(myUrl.searchParams.has('age'));