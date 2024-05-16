const express = require('express');
const app = express();

// Define the port number from environment variable or default to 3000
const PORT = process.env.PORT || 3000;

// Define a route that sends "Hello World"
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Bind the application to the correct host and port (0.0.0.0)
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});
