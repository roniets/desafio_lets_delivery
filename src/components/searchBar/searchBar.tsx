import { useState } from 'react';
import { filterByName } from '../typing/filterByName';
import { valueName } from '../typing/valueName';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const SearchBar = (props: {filterByName: filterByName}) => {

    const [valueName, setValueName] = useState<valueName>({target: { value: ''}})

    function getName() {
        props.filterByName(valueName.target.value)
    }

    return (
        <div className="container">
            <InputGroup className="mb-1">
                <FormControl placeholder="Escreva o Nome do Personagem" aria-label="Escreva o Nome do Personagem" onChange={setValueName} />
                <InputGroup.Append>
                    <Button id="getName" className="button" onClick={getName} variant="outline-secondary">Pesquisar</Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
    )
}

export default SearchBar;