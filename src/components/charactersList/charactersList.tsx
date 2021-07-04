import { useContext } from "react";
import { FavoritesContext } from "../../App";
import { typeProps } from '../typing/typeProps';
import { character } from '../typing/character';
import { list } from '../typing/list';
import imageFavorite from '../../assets/img/favorite.png'; 
import imageNoFavorite from '../../assets/img/noFavorite.png'; 
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

    function validationFavoriteStar(id: number) {
        let validate = [...favorites];
        if(favorites.length > 0){
            let validadeFavorite = validate.find((value) => id === value.id);
            if(validadeFavorite !== undefined) {
                return <img className="favorite-img" src={imageFavorite} alt="Imagem de estrela dourada de item favoritado" />
            } else {
                return <img className="favorite-img" src={imageNoFavorite} alt="Imagem de estrela preta de item não favoritado" />
            }
        } else {
            return <img className="favorite-img" src={imageNoFavorite} alt="Imagem de estrela preta de item não favoritado" />
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
            newState = newState.filter((value) => addCharacter.id !== value.id);
        }
        increment(newState);
    }

    function renderList(list: list) {
        if(list.length > 0) {
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
                        <img className="characters-img" src={character.image} alt="Foto do personagem"></img>
                    </td>
                    <td onClick={() => favorite(character)}>
                        { 
                        validationFavoriteStar(character.id) 
                        }
                    </td>
                </tr>
            )
        })
    } else {
        return (
            <tr>
                <td colSpan={7} className="notice">*Sua lista de favoritos está vazia! Para adicionar personagens a sua lista, vá em lista de personagens e clique na estrela no canto à direita do personagem que deseja favoritar.</td>
            </tr>
        )
    }
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

            {props.location ? <div><hr /> <p className="notice">**Para remover um personagem de sua lista de favoritos, basta clicar na estrela no canto à direita do personagem que deseja remover.</p></div> :
            <div>
                <hr />
                <Pagination className="pagination" size="lg">
                    <Pagination.First onClick={getFirstPage} />
                    {props.prev ? <Pagination.Prev onClick={getPrevPage} /> : <Pagination.Prev disabled onClick={getPrevPage} />}
                    {props.next ? <Pagination.Next onClick={getNextPage} /> : <Pagination.Next disabled onClick={getNextPage} />}
                    <Pagination.Last onClick={getLastPage} />
                </Pagination>
            </div>
            }

        </div>
    );
}

export default CharactersList