import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Button, Header, Label, Modal } from 'semantic-ui-react'
import './style.scss';

function Game({name, id, masterName, status, description, nbPlayer }) {

  const [open, setOpen] = useState(false)

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
            <Modal.Content>
                <div className='gameModale'>
                    <div className='gameModale-label'>
                        <Label className='labelGame-status' color="green" key={"green"}>{status}</Label>
                        <Label className='labelGame-masterName' color="black" key={"black"}>{`MJ: ${masterName}`}</Label>
                        <Label className='labelGame-nbPlayer' color="grey" key={"grey"}>{`${nbPlayer} Joueurs`}</Label>
                        <p>{description}</p>
                    </div>
                </div>
            </Modal.Content>      
            </Modal>
            <Label color="green" key={"green"}>{status}</Label>
            <Button>Rejoindre</Button>

        </div>

        </>
  )
}

Game.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number,
    masterName: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    nbPlayer: PropTypes.number.isRequired
};


export default Game
