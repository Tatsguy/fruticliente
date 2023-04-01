import modelImg from '../imgs/model.png'
import presImg from '../imgs/presicion.png'
import protoImg from '../imgs/proto.png'

export const About = () => {
    return (<>
        <div className="header-ini">
            <h1>Nosotros</h1>
        </div>
        <div className="bg-light text-center py-3">
            <div className="row m-3">
                <div className="col">
                    <h2>Las frutas y verduras en mal estado siempre son un problema a la hora de seleccionar nuestros alimentos además de que representan un riesgo para las personas despistadas que lleguen a agregarlas a sus comidas, es por esto que
                        pensamos en eliminar este problema desde antes de que llegue a nuestras fruterías de confianza.</h2><br />
                    <h4>Planeamos llevar a cabo esto con nuestra invención…</h4>
                </div>
            </div>
            <div className="container text-center">
                <div className="row g-2">
                    <div className="col-6 d-flex justify-content-center">
                        <div className="card index-card w-100">
                            <div className="card-head bg-dark text-white">
                                <h5>DESCRIPCIÓN DE LA PROPUESTA</h5></div>
                            <div className="card-body">
                                <h4>Nuestra propuesta es un conjunto de cámaras que ayudará a clasificar las verduras por su estado de madurez, esto ayudará a que la cosecha de los vegetales se pueda realizar de una manera más exacta.</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 d-flex justify-content-center">
                        <div className="card index-card w-100">
                            <div className="card-head bg-dark text-white">
                                <h5>OBJETIVO DEL PROYECTO</h5></div>
                            <div className="card-body">
                                <h4>El objetivo que se planea con este proyecto es crear un clasificador de frutas en el cual con múltiples cámaras y la ayuda de la IA se registrará cada una de las frutas y el estado en el que se encuentran, las frutas irán pasando por las cámaras y llevándolas al punto donde estén clasificadas según sus características.</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pt-3">
                    <h1>Resultados</h1>
                    <div className="col">
                        <h2>Modelo de la IA</h2>
                        <p>Entrenamiento del modelo con un promedio de 3000 imagenes por fruto</p>
                        <img src={modelImg} alt="" srcset="" />
                    </div>

                    <div className="col mt-2">
                        <h2>Prototipo</h2>
                        <p>Prototipado base del proyecto</p>
                        <p>Algunos elementos fueron retirados por practicidad del proyecto</p>
                        <img src={protoImg} alt="" srcset="" />
                    </div>

                    <div className="col mt-2">
                        <h2>Presicion del modelo</h2>
                        <p>El modelo separa la imagen recibida en rgb para determinar las ondas o tendencia de color que determina que fruta es la que se presenta frente a la camara</p>
                        <img src={presImg} alt="" srcset="" />
                    </div>
                </div>
            </div>
        </div>
    </>)
}