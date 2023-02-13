import express from 'express';
import socketio, { Server } from 'socket.io';
import http from 'http';

const app = express();
const server = http.createServer(app);

interface ServerToClientEvents {
  notifyMessage: (message: Message) => void;
}

interface ClientToServerEvents {
  sendMessage: (message: Message) => void;
}

interface InterServerEvents {
  ping: () => void;
}

interface Message {
  author: string;
  text: string;
}

const io = new Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, Message>(server);

io.on('connection', (socket: socketio.Socket) => {
  console.log(`A new user has connected: ${socket.id}`);

  socket.on('sendMessage', (message: Message) => {
    console.log(message);
    console.log(`Received message: ${message.text}`);
    io.emit('notifyMessage', message);
  });

  socket.on('disconnect', () => {
    console.log(`User has disconnected: ${socket.id}`);
  });
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

export default server;
