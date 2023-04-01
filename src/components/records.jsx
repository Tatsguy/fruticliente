import {LineChart, Line,BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip,Legend, ResponsiveContainer} from "recharts";
import React, { useState, useContext, useCallback, useEffect } from 'react';
import { SocketContext } from '../socket';

export const Records = () => {
    const socket = useContext(SocketContext);

    const [dataHistorica, setData] = useState([]) //Los datos historicos de la BD

    const [dataTotal, setTotal] = useState([]) //Los datos totales de la BD

    const [dataDia, setDiario] = useState([]) //Los datos dependiendo del dia seleccionado

    var currentDate

    function getDate() {
        currentDate = new Date()
        currentDate.setHours(0)
        currentDate.setMinutes(0)
        currentDate.setSeconds(0)
        currentDate.setMilliseconds(0)
        return currentDate
    }

    function formatDate(fecha) {
        fecha = new Date(fecha + ' 00:00:00')
        return fecha

    }

    function handler(e) {
        socket.emit('cliente:buscarFrutaDia', formatDate(e.target.value))
    }

    const [joined, setJoined] = useState(false);

    const handleInviteAccepted = useCallback(() => {
        setJoined(true);
    }, []);

    useEffect(() => {
        socket.emit('cliente:buscarFruta')
        socket.emit('cliente:buscarFrutaDia', getDate())

        socket.on('servidor:verFrutaHistorial', (frutos) => {
            setData(depurarFechas(frutos))
            setTotal(depurarFrutas(frutos))
        })
        socket.on('servidor:verFrutaDiaria', (frutosDia) => {
            setDiario(frutosDia)
        })

        socket.on('servidor:actualizacionTotal', (msg) => {
            socket.emit('cliente:buscarFruta')
            socket.emit('cliente:buscarFrutaDia', getDate())
        })
    }, [socket, handleInviteAccepted]);
    return (<>
        <div className="bg-light text-center py-3 d-flex flex-column">
            <h2>Frutas y verduras ingresadas hoy</h2>
            <h3>Si deseas observar otro dia, selecciona el dia</h3>
            <br></br>
            <form action="">
                <input type="date" name="" id="" onChange={handler} />
            </form>
            <ResponsiveContainer width="100%" aspect={3}>
                <BarChart
                    width={500}
                    height={300}
                    data={dataDia}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey='nombre' />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="frescos" stackId="a" fill="#8884d8" />
                    <Bar dataKey="podridos" stackId="a" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
            <div className="row w-100 mt-4">
                <div className="col-6">
                    <h3>Datos historicos</h3>
                    <ResponsiveContainer width="100%" aspect={2}>
                        <LineChart
                            width={500}
                            height={300}
                            data={dataHistorica}
                            margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="frescos" stroke="#8884d8" activeDot={{ r: 8 }} />
                            <Line type="monotone" dataKey="podridos" stroke="#82ca9d" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="col-6">
                    <h3>Tendencia de frutos</h3>
                    <ResponsiveContainer width="100%" aspect={2}>
                        <BarChart
                            data={dataTotal}
                            margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey='nombre' />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="frescos" stackId="a" fill="#8884d8" />
                            <Bar dataKey="podridos" stackId="a" fill="#82ca9d" />
                            <Bar dataKey="cantidad" fill="#ffc658" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    </>)
}

//Metodo para depurar la info separandola por fechas
function depurarFechas(frutosHistoricos) {
    const result = frutosHistoricos.reduce((acc, item) => {
        const parts = item.fechaRegistro.split('T');
        const date = parts[0];
        const podridos = item.podridos;
        const frescos = item.frescos;

        const index = acc.findIndex((obj) => obj.date === date);

        if (index === -1) {
            acc.push({ date, podridos, frescos });
        } else {
            acc[index].podridos += podridos;
            acc[index].frescos += frescos;
        }

        return acc;
    }, []);
    return result
}

//Metodo para realizar la separacion mediante los nombres
function depurarFrutas(frutosHistoricos) {
    const result = frutosHistoricos.reduce((acc, item) => {
        const nombre = item.nombre;
        const podridos = item.podridos;
        const frescos = item.frescos;
        const cantidad = item.cantidad;

        const index = acc.findIndex((obj) => obj.nombre === nombre);

        if (index === -1) {
            acc.push({ nombre, podridos, frescos, cantidad });
        } else {
            acc[index].podridos += podridos;
            acc[index].frescos += frescos;
            acc[index].cantidad += cantidad;
        }

        return acc;
    }, []);
    console.log(result)
    return result
}