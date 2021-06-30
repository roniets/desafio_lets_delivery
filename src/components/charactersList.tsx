import { useState, useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';

import './charactersList.css';

function mapReturn(response: any) {
    return response.data.results;
}

const CharactersList = () => {

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
        axios
            .get(url)
            .then(response => {
                setCharacters(mapReturn(response));
                setInfo(response.data.info);
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <h2>Lista de Personagens:</h2>


            <Table striped bordered hover>

                <thead>
                    <tr>
                        <th>Nome:</th>
                        <th>Origem:</th>
                        <th>Espécie:</th>
                        <th>Gênero:</th>
                        <th>Status:</th>
                        <th>Foto:</th>
                        <th>Favoritar?</th>
                    </tr>
                </thead>

                <tbody>
                    {characters.map(character => {
                        return (
                            <tr key={character.id}>
                                <td lang="en">
                                    {character.name}
                                </td>
                                <td lang="en">
                                    {character.origin.name}
                                </td>
                                <td lang="en">
                                    {character.species}
                                </td>
                                <td lang="en">
                                    {character.gender}
                                </td>
                                <td lang="en">
                                    {character.status}
                                </td>
                                <td>
                                    <img src={character.image} alt="Foto do personagem"></img>
                                </td>
                                <td>
                                    sim/não
                                </td>
                            </tr>
                        )
                    })}
                </tbody>

            </Table>

            <Pagination size="lg">
                <Pagination.First onClick={firistPage} />
                {info.prev ? <Pagination.Prev onClick={prevPage} /> : <Pagination.Prev disabled onClick={prevPage} />}
                {info.next ? <Pagination.Next onClick={nextPage} /> : <Pagination.Next disabled onClick={nextPage} />}
                <Pagination.Last onClick={lastPage} />
            </Pagination>

        </div>
    );
}

export default CharactersList