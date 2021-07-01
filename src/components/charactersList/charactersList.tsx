import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import './charactersList.css';

type character = {
    id: number,
    name: string,
    origin: { name: string },
    species: string,
    gender: string,
    status: string,
    image: string,
}

const CharactersList = (props: { characters: Array<character>, firistPage: any, lastPage: any, prevPage: any, nextPage: any, prev: boolean, next: boolean}) => {

    function getFiristPage() {
        props.firistPage();
    }
    
    function getLastPage() {
        props.lastPage();
    }

    function getNextPage() {
        props.nextPage();
    }

    function getPrevPage() {
        props.prevPage();
    }

    return (
        <div>

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
                    {props.characters.map(character => {
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

            <Pagination className="pagination" size="lg">
                <Pagination.First className="pagination-elements" onClick={getFiristPage} />
                {props.prev ? <Pagination.Prev className="pagination-elements" onClick={getPrevPage} /> : <Pagination.Prev disabled onClick={getPrevPage} />}
                {props.next ? <Pagination.Next className="pagination-elements" onClick={getNextPage} /> : <Pagination.Next disabled onClick={getNextPage} />}
                <Pagination.Last className="pagination-elements" onClick={getLastPage} />
            </Pagination>

        </div>
    );
}

export default CharactersList