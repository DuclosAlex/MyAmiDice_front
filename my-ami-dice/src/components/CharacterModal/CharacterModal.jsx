import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Button, Header, Modal } from 'semantic-ui-react'
import './style.scss';

function CharacterModal({firstname, lastname}) {
  const [open, setOpen] = useState(false)

  return (   

    <Modal className='character-modal'
      closeIcon
      open={open}
      trigger={<Button>{`${firstname} ${lastname}`}</Button>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header content = {`${firstname} ${lastname}`} />
      <Modal.Content>
       <div>fiche perso</div> {/*TODO: mettre la vrai fiche perso */}
      </Modal.Content>      
    </Modal>
  )
}

CharacterModal.propTypes = {
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
};


export default CharacterModal
