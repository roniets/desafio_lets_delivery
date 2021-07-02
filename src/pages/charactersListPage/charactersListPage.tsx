import { useState, useEffect } from "react";
import { character } from '../../components/typing/character';
import { info } from '../../components/typing/info';
import { loading } from '../../components/typing/loading';
import { error } from '../../components/typing/error';
import axios from "axios";
import CharactersList from '../../components/charactersList/charactersList';
import SearchBar from '../../components/searchBar/searchBar';
import Spinner from 'react-bootstrap/Spinner';

function mapReturn(response: any) {
    return response.data.results;
}

const CharactersListPage = () => {

    const [characters, setCharacters] = useState<Array<character>>([]);
    const [info, setInfo] = useState<info>({ pages: 0, prev: '', next: ''});
    const [loading, setLoading] = useState<loading>(false);
    const [error, setError] = useState<error>(false);

    useEffect(() => {
        whichSheet("https://rickandmortyapi.com/api/character");
    }, [])

    function firstPage() {
        whichSheet("https://rickandmortyapi.com/api/character");
    }

    function lastPage() {
        whichSheet(`https://rickandmortyapi.com/api/character?page=${info.pages}`);
    }

    function nextPage() {
        whichSheet(info.next);
    }

    function prevPage() {
        whichSheet(info.prev);
    }

    function filterByName(name: string){
        whichSheet(`https://rickandmortyapi.com/api/character/?name=${name}`)
    }

    function whichSheet(url: string) {
        setLoading(true)
        axios
            .get(url)
            .then(response => {
                setCharacters(mapReturn(response));
                setInfo(response.data.info);
                setLoading(false)
            })
            .catch(err => {
                setLoading(false)
                setError(true)
            });
    }

    return (
        <div className="container">
            <h1 className="title">Lista de Personagens:</h1>
            <SearchBar filterByName={filterByName} />
            {error ? <p>**Ocorreu algum erro no carregamento da lista: verifique se está conectado à internet e se o nome informado na barra de pesquisa corresponde ao nome de um personagem existente no desenho Rick e Morty, e tente novamente.</p>: 
            loading ? <Spinner animation="border" variant="info" /> : 
            <CharactersList characters={characters} firstPage={firstPage} lastPage={lastPage} nextPage={nextPage} prevPage={prevPage} prev={Boolean(info.prev)} next={Boolean(info.next)} />}
        </div>
    )
}

export default CharactersListPage;