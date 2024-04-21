// const express = require('express');
// const http = require('http');
// const socketIo = require('socket.io');

// const app = express();
// const server = http.createServer(app);
// const io = socketIo(server);

// app.use(express.static('public'));

// io.on('connection', (socket) => {
//     console.log('A user connected');

//     // Handle errors
//     socket.on('error', (error) => {
//         console.error('Socket error:', error);
//     });

//     // Handle successful reconnections
//     socket.on('reconnect', (attemptNumber) => {
//         console.log(`Socket reconnected (attempt ${attemptNumber})`);
//     });

//     // Handle failed reconnections
//     socket.on('reconnect_failed', () => {
//         console.error('Socket reconnection failed');
//     });

//     socket.on('disconnect', () => {
//         console.log('User disconnected');
//     });
// });


// const PORT = process.env.PORT || 3000;
// server.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });


// Import required modules
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public'));


io.on('connection', (socket) => {
    console.log('A user connected');

    // Example: Trigger an error event in response to a specific client action
    socket.on('trigger error', () => {
        // Emit an error event to the client
        socket.emit('error', 'An error occurred on the server');
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
