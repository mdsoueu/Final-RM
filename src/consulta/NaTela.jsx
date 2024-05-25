import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

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

    return (
        <div>
            <h3>Informações</h3>
            <img src={personagem.image} alt={personagem.name} />
            <p>Nome: {personagem.name}</p>
            <p>Status: {personagem.status}</p>
            <p>Species: {personagem.species}</p>
            <p>Type: {personagem.type}</p>
            <p>Gender: {personagem.gender}</p>
            <p>Origin: {personagem.origin.name}</p>
            <p>Location:{personagem.location.name}</p>
            <ul>
                {episodios.map(episodio => (
                    <ul key={episodio.id}>
                        <p>
                            <Link to={`/episodios/${episodio.id}`}>
                                {episodio.name}
                            </Link>
                        </p>
                    </ul>
                ))}
            </ul>
        </div>
    );
}

export default NaTela