const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Enable CORS for all routes
app.use(cors());

// Parse JSON bodies (if needed)
app.use(express.json());

// API routes
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from the server!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});