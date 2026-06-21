const express = require('express');
const app = express();
const PORT = 3000;

// Base route (API Endpoint)
app.get('/', (req, res) => {
    res.send('Welcome to my Node.js learning journey!');
});

// Initialize and start the server on the specified port
app.listen(PORT, () => {
    console.log(`Server successfully running on http://localhost:${PORT}`);
});