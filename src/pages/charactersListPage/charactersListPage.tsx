import { useState, useEffect, useContext} from "react";
import { useLocation } from 'react-router-dom';
import { character } from '../../components/typing/character';
import { name } from '../../components/typing/name';
import { url } from '../../components/typing/url';
import { info } from '../../components/typing/info';
import { loading } from '../../components/typing/loading';
import { error } from '../../components/typing/error';
import { FavoritesContext } from "../../App";
import { routePageFavorites } from '../../utils/utils';
import axios from "axios";
import CharactersList from '../../components/charactersList/charactersList';
import SearchBar from '../../components/searchBar/searchBar';
import Spinner from 'react-bootstrap/Spinner';

const CharactersListPage = () => {

    const [characters, setCharacters] = useState<Array<character>>([]);
    const [info, setInfo] = useState<info>({ pages: 0, prev: '', next: ''});
    const [loading, setLoading] = useState<loading>(false);
    const [error, setError] = useState<error>(false);
    const {favorites} = useContext(FavoritesContext);

    let location = useLocation();

    useEffect(() => {
        if(location.pathname === routePageFavorites){
            setCharacters(favorites);
            return
        }
            whichSheet("https://rickandmortyapi.com/api/character");     
    }, [])

    function firstPage() {
        if(location.pathname === routePageFavorites){
            return
        }
        whichSheet("https://rickandmortyapi.com/api/character");
    }

    function lastPage() {
        if(location.pathname === routePageFavorites){
            return
        }
        whichSheet(`https://rickandmortyapi.com/api/character?page=${info.pages}`);
    }

    function nextPage() {
        if(location.pathname === routePageFavorites){
            return
        }
        whichSheet(info.next);
    }

    function prevPage() {
        if(location.pathname === routePageFavorites){
            return
        }
        whichSheet(info.prev);
    }

    function filterByName(name: name){
        if(location.pathname === routePageFavorites){
            return
        }
        whichSheet(`https://rickandmortyapi.com/api/character/?name=${name}`)
    }

    function mapReturn(response: any) {
        if(location.pathname === routePageFavorites) {
            return response.data;
        }
        return response.data.results;
    }

    function whichSheet(url: url) {
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
            {location.pathname === routePageFavorites ? <h1 className="title">Lista de Favoritos:</h1> :
            <h1 className="title">Lista de Personagens:</h1>}
            <SearchBar filterByName={filterByName} />
            {error ? <p>**Ocorreu algum erro no carregamento da lista: verifique se está conectado à internet e se o nome informado na barra de pesquisa corresponde ao nome de um personagem existente no desenho Rick e Morty, e tente novamente.</p> : 
            loading ? <Spinner animation="border" variant="info" /> :
            location.pathname === routePageFavorites ? <CharactersList setCharacters={setCharacters} characters={characters} location={Boolean(location.pathname === routePageFavorites)} /> : 
            <CharactersList setCharacters={setCharacters} characters={characters} location={Boolean(location.pathname === routePageFavorites)} firstPage={firstPage} lastPage={lastPage} nextPage={nextPage} prevPage={prevPage} prev={Boolean(info.prev)} next={Boolean(info.next)} />
            }
        </div>
    )
}

export default CharactersListPage;