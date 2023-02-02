import PropTypes from 'prop-types';
import { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import './style.scss'


function CharacterModifyPrésentation ({data, type, characterValue}){

    const [value, setValue] = useState(characterValue);

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const handlesubmit = async (event) => {
        event.preventDefault()
        try {
            console.log("modify value: ", value)
            await api.post("/characters/update", value)
        } catch (error) {
           throw new Error(error) 
        }
    }

    return (
        <Form on onSubmit={handlesubmit}>
            <Form.Input
                type={type}
                name={data}
                value={value}
                onChange={handleChange}
                inline
            />
            <Button type="submit">Valider</Button> 
        </Form>
       
    )
}

CharacterModifyPrésentation.propTypes = {
    data: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    characterValue: PropTypes.string.isRequired,
    
};

export default CharacterModifyPrésentation