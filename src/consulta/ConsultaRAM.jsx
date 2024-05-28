import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Paginacao from "../components/Paginacao";

const ConsultaRAM = () => {
  const [personagens, setPersonagens] = useState([]);
  const [paginaAtual, setPaginaAtual] = useState(1); // paginaAtual - armazena a minha página | setPaginaAtual - atualiza o estado de 'paginaAtual'
  const [totalPaginas, setTotalPaginas] = useState(1); // totalPaginas - armazena o total de páginas que a API fornece | setTotalPaginas - atualiza o estado de 'setTotalPaginas'

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${paginaAtual}`)
      .then((response) =>
        response.json()
      ).then(resultadoConsulta => {
        setPersonagens(resultadoConsulta.results)
        setTotalPaginas(resultadoConsulta.info.pages);
      });
  }, [paginaAtual]);


  const handlePageChange = (novaPagina) => {
    setPaginaAtual(novaPagina);
  };

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

      <Paginacao paginaAtual={paginaAtual} totalPaginas={totalPaginas} onPageChange={handlePageChange} />
    </>
  );
}

export default ConsultaRAM