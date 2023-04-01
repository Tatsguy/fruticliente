import { Link } from "react-router-dom"
export const Footer = () => {
    return (<>
        <footer className="bg-dark text-center text-white">
            <div className="container pt-4">
                <section>
                    <p>
                        FruITpy es una empresa que busca la implementacion de la IA en microcontroladores para la realización
                        de tareas monótonas que pueden ser simplificadas con unos cuantos sensores y componentes. Velando siempre
                        por alternativas sencillas y con objetivo. Mantente sano, mantente seguro.
                    </p>
                </section>
            </div>
            <div className="text-center p-3">
                © 2023 Copyright:
                <Link className="text-white" to="https://mdbootstrap.com/">FruITpy</Link>
            </div>
        </footer>
    </>)
}