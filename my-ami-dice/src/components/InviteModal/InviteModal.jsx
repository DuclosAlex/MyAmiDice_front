import React, { useState } from 'react';
import { Button, Modal, Header } from 'semantic-ui-react';
import CharacterCreationModal from "../CharacterCreationModal/CharacterCreationModal"
import './style.scss';

const master = 'master';
const gameName = 'name'

function InviteModal() {
  const [open, setOpen] = useState(false)
  const [CharacterCreationModalOpen , setCharacterCreationModalOpen] = useState(false)

  const handleClick = () => {
    setCharacterCreationModalOpen(true)
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
    setCharacterCreationModalOpen(false)
  }


  

  return (
    <>
      <Modal className='invitation-modal'
        trigger={<Button>Invitation</Button>}
        open={open}
        onClose={() => setOpen(false)}
        onOpen={handleOpen}
      >
        <Header content='Invitation en cours' />
        <Modal.Content >
          <p >
            Vous avez été invité par {master} pour participé a la partie {gameName}
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button color='grey' onClick={() => setOpen(false)}> Refuser </Button>
          <Button color='grey' onClick={handleClick}> Accepter </Button>         
        </Modal.Actions>
      </Modal>
      {CharacterCreationModalOpen? <CharacterCreationModal /> : null }         
    </>      
  )
}

export default InviteModal
