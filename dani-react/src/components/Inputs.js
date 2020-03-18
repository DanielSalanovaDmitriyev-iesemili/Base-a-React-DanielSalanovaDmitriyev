import React from "react";

function Inputs() {
    return (
        <main>
            <form name="registro">

                <div className="col-md-6">

                    <div className="row">
                        <label style={{fontSize: 30,      marginTop: 100,
    marginLeft: 300}}> <b>Usuario:</b> <input type="text" placeholder="Usuario" style={{marginLeft: 150}}
                                                 name="user" id="user"/> </label>
                    </div>
                    <div className="row">
                        <div>
                            <label style={{fontSize: 30,
                   marginLeft: 300}}> <b>Contraseña:</b> <input type="password" placeholder="Contraseña"
                                                                   style={{marginLeft: 100}} name="password"
                                                                   id="password"/> </label>
                        </div>
                    </div>
                    <div className="row">
                        <div>
                            <label style={{fontSize: 30,
    marginLeft: 300}}> <b>Repetir contraseña:</b> <input type="password" placeholder="Repetir Contraseña"
                                                            name="passwordr" id="passwordr"/> </label>
                        </div>
                    </div>
                    <div className="row">
                        <label style={{fontSize: 30,
    marginLeft: 300}}> <b>Correo electrónico:</b> <input type="text" placeholder="Correo electrónico" name="email"
                                                            id="email"/>
                        </label>
                    </div>
                    <div className="row">
                        <a href="#" className="btn btn-primary btn-lg active" id="boton" role="button"
                           aria-pressed="true"
                           style={{fontSize: 21, marginLeft: 375,  marginTop: 30}} onClick="obtenerdatos();">All
                            right!</a>
                        <button className="btn btn-primary btn-lg active"
                                type="button" style={{fontSize: 21, marginLeft: 375,  marginTop: 30}}
                                onClick="mostrar()">¿Olvidaste tu contraseña?
                        </button>
                    </div>
                </div>

            </form>


        </main>
    );
}

export default Inputs;