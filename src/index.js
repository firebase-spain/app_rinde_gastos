import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import WebFont from 'webfontloader';
import Contenedor from './elementos/Contenedor';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import EditarGasto from './componentes/EditarGasto';
import GastosPorCategoria from './componentes/GastosPorCategoria';
import InicioSesion from './componentes/InicioSesion';
import ListaDeGastos from './componentes/ListaDeGastos';
import RegistroUsuarios from './componentes/RegistroUsuarios';

WebFont.load({
  google: {
    families: ['Work Sans:400,500,700', 'sans-serif']
  }
});

const Index = () => {
  return (
    <BrowserRouter>
      <Contenedor>
      <Routes>
            <Route path="/iniciar-sesion" element={<InicioSesion/>}/>
            <Route path="/crear-cuenta" element={<RegistroUsuarios/>}/>
            <Route path="/categorias" element={
									<GastosPorCategoria />
						}/>
              <Route path="/lista" element={
									<ListaDeGastos />
						} />

						<Route path="/editar/:id" element={
									<EditarGasto />
						} />

            <Route path="/" element={
									<App />
						}/>
      </Routes>
          
      </Contenedor>
  </BrowserRouter>
  );
}
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index/>);


// https://iconmonstr.com/
// https://styled-components.com/

