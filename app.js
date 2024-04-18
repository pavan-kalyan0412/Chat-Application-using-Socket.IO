
// Import required modules
const express = require('express');  // Import Express.js framework
const http = require('http');  // Import Node.js HTTP module
const socketIo = require('socket.io');  // Import Socket.IO library

// Create an Express application
const app = express();

// Create an HTTP server using the Express application
const server = http.createServer(app);

// Attach Socket.IO to the HTTP server
const io = socketIo(server);

// Serve static files from the 'public' directory
app.use(express.static('public'));

  var clients = 0

// Event listener for new connections
io.on('connection', (socket) => {
    console.log('A user connected');

    clients++;
    io.emit('update clients count', clients)


    // Event listener for disconnections
    socket.on('disconnect', () => {
        console.log('User disconnected');

        clients--;
        io.emit('update clients count', clients)
    });

    // Event listener for chat messages
    socket.on('chat message', (msg) => {
        // Broadcast the received message to all connected clients
        io.emit('chat message', msg);
    });
});

// Define the port on which the server will listen for connections
const PORT = process.env.PORT || 3000;

// Start the server and listen on the defined port
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
