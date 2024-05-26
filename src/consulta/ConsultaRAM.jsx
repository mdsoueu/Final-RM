import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Paginacao from "../components/Paginacao";

const ConsultaRAM = () => {
  const [personagens, setPersonagens] = useState([]);

  useEffect(() => {
    console.log("Consultar API");
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then(resultadoConsulta => { setPersonagens(resultadoConsulta.results); });
  }, []);

  
  return (
    <>
      <br />
      <div style={{ paddingLeft: "50px" }}>
        <span className="botaoInicio" >
          <Link to={'/'}>Inicio</Link>
        </span>
      </div>

      {personagens.map(personagem => {
        return <div className="painelConsultaRAM">
          <br />
          <p style={{ textAlignLast: "center" }}>{personagem.name}</p>
          <Link to={`/informacao/${personagem.id}`}>
            <img src={personagem.image} alt={personagem.name} />
          </Link>
        </div>
      })}

      <Paginacao />
    </>
  );
}

export default ConsultaRAM