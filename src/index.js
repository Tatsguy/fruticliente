import ReactDOM from "react-dom/client";
import { Inicio } from "./components/inicio";
import { Error } from "./components/error";
import { Menu } from "./components/menu";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Footer } from "./components/footer";
import { About } from "./components/nosotros";
import { Login } from "./components/login";

import React, { useState, useEffect } from 'react';
import { SocketContext, socket } from './socket';
import { Records } from "./components/records";
import { ProtectedRoute } from "./components/protectedRoute";

export default function App() {
    const [isConnected, setIsConnected] = useState(socket.connected);
    const [fooEvents, setFooEvents] = useState([]);

    useEffect(() => {
        function onConnect() {
            setIsConnected(true);
        }

        function onDisconnect() {
            setIsConnected(false);
        }

        function onFooEvent(value) {
            setFooEvents(previous => [...previous, value]);
        }

        socket.on('connect', onConnect);
        socket.on('disconnect', onDisconnect);
        socket.on('foo', onFooEvent);

        return () => {
            socket.off('connect', onConnect);
            socket.off('disconnect', onDisconnect);
            socket.off('foo', onFooEvent);
        };
    }, []);
    return (<SocketContext.Provider value={socket}>
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="*" element={<Error />}></Route>
                <Route index element={<Inicio />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/records" element={<Records />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    </SocketContext.Provider>)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);