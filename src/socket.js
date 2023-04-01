import socketio from 'socket.io-client';
import React from 'react';

// "undefined" means the URL will be computed from the `window.location` object
const URL = 'http://localhost:8080';

export const socket = socketio(URL);
export const SocketContext = React.createContext();