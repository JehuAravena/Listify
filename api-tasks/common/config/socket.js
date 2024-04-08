const socketIo = require('socket.io');
const cors = require('cors');

let io;

function initSocket(server) {
	io = socketIo(server, {
		cors: {
		  origin: 'http://localhost:4200', 
		  methods: ['GET', 'POST', 'PUT', 'DELETE'],
		},
	});
  
	io.on('connection', (socket) => {
		console.log('Client connected to WebSocket');
	});
}

function getIo() {
	if (!io) {
		throw new Error('Socket.io is not initialized.');
	}
	return io;
}

module.exports = {
	initSocket,
	getIo,
};
