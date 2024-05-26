import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import NaTela from "./NaTela";

const Episodio = () => {
    const { id } = useParams();
    const [epi, setEpi] = useState(null);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/episode/${id}`)
            .then((resposta) => resposta.json())
            .then((resultadoConsulta) => { setEpi(resultadoConsulta); });
    }, [id]);

    if (!epi) { return <h3>...</h3> }

    return <>
        <br />
        <div style={{ paddingLeft: "50px" }}>
            <span className="botaoInicio" >
                <Link to={'/'}>Inicio</Link>
            </span>
        </div>

        <div className="painelEpisodio">
            <h1>Episódio</h1>
            <p>{epi.episode}</p>
            <p>Nome: {epi.name}</p>
            <p>Air Date: {epi.air_date}</p>
            <h2>Personagens:</h2>
            <ul>
                {epi.characters.map((characterUrl, index) => {
                    const characterId = characterUrl.split('/').pop();
                    return (
                        <ul key={index}>
                            <a style={{ color: "black", paddingRight: "82px" }} href={`/informacao/${characterId}`}> Personagem {characterId}</a>
                        </ul>
                    );
                })}
            </ul>
        </div>
    </>
}

export default Episodio