import React from "react";
import {Header, Titulo} from './../elementos/Header';
import {Helmet} from 'react-helmet';
import BtnRegresar from './../elementos/BtnRegresar';
// import { AuthContext } from "../contextos/AuthContext";
import { useAuth } from "../contextos/AuthContext";


const ListaDeGastos = () => {
    // const contexto = useContext(AuthContext);
    // console.log(contexto)
    const {usuario} = useAuth();
    console.log(usuario);

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