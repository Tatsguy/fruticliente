import {Link} from "react-router-dom"
export const Inicio=()=>{
    return(<>
        <div className="header-ini">
            <h1>Bienvenido a FruITpy</h1>
        </div>
        <div className="bg-light text-center py-3">
            <h2>Detector automatizado de Frescura y Madurez en frutas y vegetales</h2>
            <h3>Mantente sano, mantente seguro.</h3>
            <br></br>
            <h4>¿Que quieres hacer?</h4>
            <div className="container text-center">
                <div className="row g-2">
                    <div className="col-6 d-flex justify-content-center">
                        <Link to="/login">
                            <div className="card index-card">
                                <div className="card-body">
                                    <h5 className="card-text">Acceso a la App</h5>
                                </div>
                                <img src="https://static.vecteezy.com/system/resources/previews/000/574/846/original/login-sign-icon-vector.jpg"
                                    className="card-img-top" alt="..."></img>
                            </div>
                        </Link>
                    </div>
                    <div className="col-6 d-flex justify-content-center">
                        <Link to="/about">
                            <div className="card index-card">
                                <div className="card-body">
                                    <h5 className="card-text">Sobre la App</h5>
                                </div>
                                <img src="https://d1nhio0ox7pgb.cloudfront.net/_img/i_collection_png/256x256/plain/about.png"
                                    className="card-img-top" alt="..."></img>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div></>)
}