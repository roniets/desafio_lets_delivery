import { useContext } from "react";
import { FavoritesContext } from "../../App";
import { typeProps } from '../typing/typeProps';
import { character } from '../typing/character';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';

import './charactersList.css';

const CharactersList = (props: typeProps) => {

    const {favorites, increment} = useContext(FavoritesContext);

    function getFirstPage() {
        if(props.firstPage === undefined){
            return
        }
        props.firstPage();
    }
    
    function getLastPage() {
        if(props.lastPage === undefined){
            return
        }
        props.lastPage();
    }

    function getNextPage() {
        if(props.nextPage === undefined){
            return
        }
        props.nextPage();
    }

    function getPrevPage() {
        if(props.prevPage === undefined){
            return
        }
        props.prevPage();
    }

    function validateLocation() {
        if(props.location){
            return renderList(favorites);
        } else {
            return renderList(props.characters);
        }
    }

    function favorite(addCharacter: character) {
        let newState = [...favorites];
        if(favorites.length === 0) {
            newState.push(addCharacter);
            increment(newState);
            return
        }
        let add = newState.find((value) => addCharacter.id === value.id);
        if(add === undefined) {
            newState.push(addCharacter);
        } else {
            newState = newState.filter((value) => addCharacter.id != value.id);
        }
        increment(newState);
    }

    function renderList(list: Array<any>) {
        return list.map(character => {
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
                    <td onClick={() => favorite(character)}>
                        sim/não
                    </td>
                </tr>
            )
        })
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
                    {
                    validateLocation()  
                    }
                </tbody>

            </Table>

            {props.location  ? <p>**Esses são todos os seus favoritos.</p> : <Pagination className="pagination" size="lg">
                <Pagination.First className="pagination-elements" onClick={getFirstPage} />
                {props.prev ? <Pagination.Prev className="pagination-elements" onClick={getPrevPage} /> : <Pagination.Prev disabled onClick={getPrevPage} />}
                {props.next ? <Pagination.Next className="pagination-elements" onClick={getNextPage} /> : <Pagination.Next disabled onClick={getNextPage} />}
                <Pagination.Last className="pagination-elements" onClick={getLastPage} />
            </Pagination>}

        </div>
    );
}

export default CharactersList