import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

    return (
        <div>
            <h1>{epi.name}</h1>
            <p>Air Date: {epi.air_date}</p>
            <p>Episode: {epi.episode}</p>
            <h2>Characters:</h2>
            <ul>
                {epi.characters.map((characterUrl, index) => {
                    const characterId = characterUrl.split('/').pop();
                    return (
                        <li key={index}>
                            <a href={`/informacao/${characterId}`}>Character {characterId}</a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Episodio