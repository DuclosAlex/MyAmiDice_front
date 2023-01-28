import React, { useState } from 'react';
import { Button, Modal, Header } from 'semantic-ui-react';
import CharacterCreationModal from "../CharacterCreationModal/CharacterCreationModal"
import './style.scss';



function InviteModal({masterName, gameName}) {

  const dataStorage = localStorage.getItem('User'); // recupère la donnée lié a la key "User" dans le localStorage en STRING
  const userData = JSON.parse(dataStorage) // reconstruit les données du user en JSON 
  
  const [open, setOpen] = useState(false)
  const [CharacterCreationModalOpen , setCharacterCreationModalOpen] = useState(false)

  const handleClick = () => {
    setCharacterCreationModalOpen(true)
    setOpen(false)
  }

  const handleClickDecline = async () => {    
    setOpen(false)

    try {
      await api.delete(`/invite/:${userData.game_invite[0].id}`) 
    } catch (error) {
        throw new Error(error)
    }
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
            Vous avez été invité par {masterName} pour participé a la partie {gameName}
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button color='grey' onClick={handleClickDecline}> Refuser </Button>
          <Button color='grey' onClick={handleClick}> Accepter </Button>         
        </Modal.Actions>
      </Modal>
      {CharacterCreationModalOpen? <CharacterCreationModal /> : null }         
    </>      
  )
}

export default InviteModal
