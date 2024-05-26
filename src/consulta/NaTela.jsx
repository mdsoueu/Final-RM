import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import './index.css'

const NaTela = () => {
    const { id } = useParams();
    const [personagem, setPersonagem] = useState(null);
    const [episodios, setEpisodios] = useState([]);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then((resposta) => resposta.json())
            .then((resultadoConsulta) => { setPersonagem(resultadoConsulta); });
    }, [id]);

    if (personagem) {
        const promises = personagem.episode.map(url => fetch(url).then(response => response.json()));
        Promise.all(promises).then(results => setEpisodios(results));
    }

    if (!personagem) { return <h3>...</h3> }

    return <>
        <br />
        <div style={{ paddingLeft: "50px" }}>
            <span className="botaoInicio" >
                <Link to={'/'}>Inicio</Link>
            </span>
        </div>

        <div style={{ textAlign: "center" }}>

            <h2 style={{ margin: "2px" }}>Informações</h2>

            <div className="painelNaTelaImg">
                <img src={personagem.image} alt={personagem.name} />
            </div>

            <div className="painelNaTela">
                <p>Nome: {personagem.name}</p>
                <p>Status: {personagem.status}</p>
                <p>Species: {personagem.species}</p>
                <p>Type: {personagem.type}</p>
                <p>Gender: {personagem.gender}</p>
                <p>Origin: {personagem.origin.name}</p>
                <p>Location:{personagem.location.name}</p>
            </div>

            <br />
            <br />

            <div className="painelNaTelaEpi">
                <h2 style={{ margin: "2px" }}>Episódios</h2>
                <ul>
                    {episodios.map(episodio => (
                        <ul key={episodio.id}>
                            <p>
                                <Link style={{ color: "black", paddingRight: "75px" }} to={`/episodios/${episodio.id}`}>
                                    {episodio.name}
                                </Link>
                            </p>
                        </ul>
                    ))}
                </ul>
            </div>

        </div>
    </>
    // );
}

export default NaTela