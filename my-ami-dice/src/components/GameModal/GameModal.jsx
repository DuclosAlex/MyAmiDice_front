import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Button, Header, Label, Modal } from 'semantic-ui-react'
import './style.scss';
import { useContext } from 'react';
import {UserContext} from '../../Context/UserContext';

function GameModal({name, id, masterName, status, description, nbPlayer }) {

    const [open, setOpen] = useState(false)
    //const [gameId, setGameId] = useContext(UserContext);

    function handleClick() {
        console.log("handleClick"); //TODO: Utiliser l'id pour savoir quelle game rejoindre quand on clic dessus
        //setUser(...id);
    };

  return (
       <>  
        <div className='game'>   
            <Modal
                closeIcon
                open={open}
                trigger={<span>{name}</span>}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
            >
            <Header content = {name} />
            <Modal.Content className='game-description'>
                <div className='gameModale'>
                    <div className='gameModale-label'>
                        <Label className='labelGame-status' color="green" key={"green"}>{status}</Label>
                        <Label className='labelGame-masterName' color="black" key={"black"}>{`MJ: ${masterName}`}</Label>
                        <Label className='labelGame-nbPlayer' color="grey" key={"grey"}>{`${nbPlayer} Joueurs`}</Label>
                        <p className='game-description'>{description}</p>
                    </div>
                </div>
            </Modal.Content>      
            </Modal>
            <Label color="green" key={"green"}>{status}</Label>
            <Button onClick={handleClick}>Rejoindre</Button>

        </div>

        </>
  )
}

GameModal.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number,
    masterName: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    nbPlayer: PropTypes.number.isRequired
};


export default GameModal
