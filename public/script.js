

const socket = io();  // Initialize Socket.IO client and connect to server

document.getElementById('form').addEventListener('submit', (event) => {  // Event listener for form submission
    event.preventDefault();  // Prevent the default form submission behavior
    
    const message = document.getElementById('input').value.trim();  // Get the value of the input field
    socket.emit('chat message', message);  // Emit a 'chat message' event with the message content
    document.getElementById('input').value = '';  // Clear the input field
});

socket.on('chat message', (msg) => {  // Event listener for receiving chat messages
    const messageList = document.getElementById('messages');  // Get the message list element
    const listItem = document.createElement('li');  // Create a new list item element
    listItem.textContent = msg;  // Set the text content of the list item
    messageList.appendChild(listItem);  // Append the list item to the message list
});

// Event listener for updating the count of connected clients
socket.on('update clients count', (count) => {
    // Update the UI with the count of connected clients
    document.getElementById('connected-clients-count').textContent = count;
});


socket.on('welcome message', (message) =>{
    const messageList = document.getElementById('messages');
    const listItem = document.createElement('li');
    listItem.textContent = message;
    messageList.appendChild(listItem)
});
