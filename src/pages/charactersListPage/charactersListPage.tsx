import { useState, useEffect } from "react";
import axios from "axios";
import CharactersList from '../../components/charactersList/charactersList';
import SearchBar from '../../components/searchBar/searchBar';

function mapReturn(response: any) {
    return response.data.results;
}

const CharactersListPage = () => {

    type character = {
        id: number,
        name: string,
        origin: { name: string },
        species: string,
        gender: string,
        status: string,
        image: string,
    }

    const [characters, setCharacters] = useState<Array<character>>([]);
    const [info, setInfo] = useState<any>({})

    useEffect(() => {
        whichSheet("https://rickandmortyapi.com/api/character");
    }, [])

    function firistPage() {
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

    function whichSheet(url: string) {
        /* carregando = true; */
        axios
            .get(url)
            .then(response => {
                setCharacters(mapReturn(response));
                setInfo(response.data.info);
                /* carregando = false; */
            })
            .catch(err => console.error(err));
    }

    function filterByName(name: string){
        whichSheet(`https://rickandmortyapi.com/api/character/?name=${name}`)
    }

    return (
        <div className="container">
            <h1 className="title">Lista de Personagens:</h1>
            <SearchBar filterByName={filterByName} />
            <CharactersList characters={characters} firistPage={firistPage} lastPage={lastPage} nextPage={nextPage} prevPage={prevPage} prev={info.prev} next={info.next} />
        </div>
    )
}

export default CharactersListPage;