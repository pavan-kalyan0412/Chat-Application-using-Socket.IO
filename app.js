// Import required modules
const express = require('express');  // Import Express.js framework
const http = require('http');  // Import Node.js HTTP module

// Create an Express application
const app = express();

// Create an HTTP server using the Express application
const server = http.createServer(app);



// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define the port on which the server will listen for connections
const PORT = process.env.PORT || 3000;

// Start the server and listen on the defined port
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});