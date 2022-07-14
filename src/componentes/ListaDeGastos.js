import React from "react";
import {Header, Titulo} from './../elementos/Header';
import {Helmet} from 'react-helmet';
import BtnRegresar from './../elementos/BtnRegresar';

const ListaDeGastos = () => {
    return ( 
        <>
            <Helmet>
				<title>Listado de Gastos</title>
			</Helmet>

            <Header>
                <BtnRegresar />
				<Titulo>Listado de Gastos</Titulo>
			</Header>
        </>
     );
}
 
export default ListaDeGastos;