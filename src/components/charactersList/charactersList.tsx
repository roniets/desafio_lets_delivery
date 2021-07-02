import { typeProps } from '../typing/typeProps';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';

import './charactersList.css';

const CharactersList = (props: typeProps) => {

    function getFirstPage() {
        props.firstPage();
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

            <Table striped bordered hover borderless responsive>

                <thead className="text-muted">
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
                <Pagination.First className="pagination-elements" onClick={getFirstPage} />
                {props.prev ? <Pagination.Prev className="pagination-elements" onClick={getPrevPage} /> : <Pagination.Prev disabled onClick={getPrevPage} />}
                {props.next ? <Pagination.Next className="pagination-elements" onClick={getNextPage} /> : <Pagination.Next disabled onClick={getNextPage} />}
                <Pagination.Last className="pagination-elements" onClick={getLastPage} />
            </Pagination>

        </div>
    );
}

export default CharactersList