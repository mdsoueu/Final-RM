import React from 'react'
import { Link, Outlet } from "react-router-dom";

const Cabecalho = () => {
    return (
        <>
            <div className="titlePrincipal">
                <h1>Rick and Morty</h1>
            </div>

            <span className="botaoInicio">
                <Link to={'/'}>Inicio</Link>
                <br />
            </span>

            <div className="personagemTela">
                <Link to={'/consulta'}>Consulta personagens</Link>
            </div>
            <Outlet />
        </>
    )
}

export default Cabecalho