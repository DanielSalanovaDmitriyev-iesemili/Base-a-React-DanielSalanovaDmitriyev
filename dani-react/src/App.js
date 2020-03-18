import React from 'react';
import Inputs from "./components/Inputs";
import Menu from "./components/Menu";
import Titulo from "./components/Titulo";
import Head from "./components/Head";
import './Musica.css';


function App() {
    return (
      <div>
          <head>
          <Head/>
          </head>
          <body>
                <header><Menu/></header>
                <br/>
                <main>
                    <br/>
                    <Titulo/>
                    <br/>
                    <Inputs/>
                </main>
          </body>
      </div>

    );

}

export default App;
