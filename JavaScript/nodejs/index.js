// Import express
const express = require('express');
const app = express();
const PORT = 3000;

// Simple data
const messages = {
    hello: "Welcome to our API!",
    about: "This is a simple GET API example",
    time: new Date().toLocaleTimeString()
};

// Single GET endpoint
app.get('/api', (req, res) => {
    res.json({
        success: true,
        data: messages,
        timestamp: new Date().toISOString()
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Try accessing: http://localhost:${PORT}/api`);
});
