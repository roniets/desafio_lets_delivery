import { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const SearchBar = (props: any) => {

    const [valueName, setValueName] = useState<any>("")

    function getName() {
        console.log(valueName.target.value)
        props.filterByName(valueName.target.value)
    }

    return (
        <div className="container">
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Escreva o Nome do Personagem"
                    aria-label="Escreva o Nome do Personagem"
                    onChange={setValueName}
                />
                <InputGroup.Append>
                    <Button className="button" onClick={getName} variant="outline-secondary">Pesquisar</Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
    )
}

export default SearchBar;