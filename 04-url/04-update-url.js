const myUrl = new URL(
    'https://example.com/users?id=10'
);

// Update
myUrl.searchParams.set('id', '20');
// Add
myUrl.searchParams.append('name', 'waqar');
// Delete
myUrl.searchParams.delete('id');

console.log(myUrl.href);