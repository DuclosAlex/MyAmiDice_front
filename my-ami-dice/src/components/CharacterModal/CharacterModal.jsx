import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Button, Header, Modal } from 'semantic-ui-react'

function CharacterModal({name}) {
  const [open, setOpen] = useState(false)

  return (   

    <Modal
      closeIcon
      open={open}
      trigger={<Button>{name}</Button>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header content = {name} />
      <Modal.Content>
       <div>fiche perso</div>
      </Modal.Content>      
    </Modal>
  )
}

CharacterModal.propTypes = {
    name: PropTypes.string.isRequired,
};


export default CharacterModal
