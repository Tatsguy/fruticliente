import { SocketContext } from '../socket';
import React, {useContext,useState,useCallback,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    let navigate = useNavigate();
    const socket = useContext(SocketContext);

    const [joined, setJoined] = useState(false);

    const handleInviteAccepted = useCallback(() => {
        setJoined(true);
    }, []);

    useEffect(() => {
        socket.on('servidor:respLogin', (respUsu) => {
            if (respUsu.length>0) {
                navigate('/records')
            } else {
                console.log('Usuario no encontrado')
            }
        })
    }, [socket, handleInviteAccepted]);

    function comprobarUsuario() {
        var nombre=document.getElementById('userInput').value
        var clave=document.getElementById('passwordInput').value
        socket.emit('cliente:loginMe',({usu:nombre,pas:clave}))
    }

    return (
        <div className="logger d-flex justify-content-center align-items-center flex-column">
            <h1>Login</h1>
            <form className="formi">
                <div className="mb-3">
                    <label htmlFor="userInput" className="form-label">Usuario</label>
                    <input type="text" className="form-control" id="userInput"
                        placeholder="Usuarin" />
                </div>
                <div className="mb-3">
                    <label htmlFor="passwordInput" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="passwordInput"
                        placeholder="********" />
                </div>
                <button type="button" onClick={comprobarUsuario} className="btn btn-primary">Ingresar</button>
            </form>
        </div>);
};
