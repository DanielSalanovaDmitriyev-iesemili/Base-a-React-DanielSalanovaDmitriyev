import React from "react";

function Menu(){
    return(
        <header className="row" id="header" style={{backgroundColor: 'black'}}>
            <div>
                <nav>
                    <ul>
                        <li>
                            <button type="button">

                                <img src="" height="35" width="35" alt="logo"/></button>
                        </li>
                        <li>
                            <a href="#">Inicio</a>
                        </li>
                        <li>
                            <a href="#">Crear
                                Cuenta</a></li>
                        <li>
                            <button type="submit" style={{fontSize: 21, textAlign: 'right'}}>
                                <a>¿Desea
                                    buscar?</a></button>
                        </li>
                        <li style={{marginLeft: 30}}>
                            <label><input type="text" placeholder="Usuario..." name="userl" id="userl"/></label>
                        </li>
                        <li style={{marginLeft: 15}}>
                            <label><input type="password" placeholder="Contraseña..." name="passwordl"
                                          id="passwordl"/></label>
                        </li>
                        <li>
                            <button type="submit" value="Submit"><a
                                onClick="loggeo()">Hecho</a>
                            </button>
                        </li>
                        <li>
                            <button type="submit" value="Submit"><a
                            >Error404</a>
                            </button>
                        </li>


                    </ul>
                </nav>
            </div>
        </header>

    );
}
export default Menu;