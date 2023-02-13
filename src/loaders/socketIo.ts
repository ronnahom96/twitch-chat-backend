import { Express } from 'express';
import http from 'http';
import socketio, { Server } from 'socket.io';
import { Message } from '../interfaces/Message';


interface ServerToClientEvents {
    notifyMessage: (message: Message) => void;
}

interface ClientToServerEvents {
    sendMessage: (message: Message) => void;
}

interface InterServerEvents {
    ping: () => void;
}

export default async (app: Express) => {
    const server = http.createServer(app);
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
};





