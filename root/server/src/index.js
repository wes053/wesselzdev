// server/server.js
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;  // Use a port provided by cPanel

// Middleware
app.use(cors());  // Allow requests from other domains (like your client on a different domain)

// API route for testing
app.get('/api/test', (req, res) => {
    res.json({ message: 'Hello from the server!' });
});

// Start server
app.listen(port, () => {
    console.log(`!Server is running on http://YOUR_SERVER_IP_OR_DOMAIN:${port}`);
});
