import React from 'react'
import { Link, Outlet } from "react-router-dom";

const Cabecalho = () => {
    return (
        <>
        <div style={{paddingLeft: "50px"}}>
            <div className="titlePrincipal">
                <h1>Rick and Morty</h1>
            </div>
            
            <span className="personagemTela">
                <Link to={'/consulta'}>Consulta personagens</Link>
            </span>  <br />
            </div>
            <Outlet />
        </>
    )
}

export default Cabecalho