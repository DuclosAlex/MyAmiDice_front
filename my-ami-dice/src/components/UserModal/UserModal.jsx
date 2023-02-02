import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Button, Header, Modal } from 'semantic-ui-react'
import './style.scss';

function UserModal({id, pseudo, email, firstname, lastname }) {
  const [open, setOpen] = useState(false)

  return (   

    <Modal className='user-modal'
      closeIcon
      open={open}
      trigger={<Button>{`${firstname} ${lastname}`}</Button>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header content = {`${firstname} ${lastname}`} />
      <Modal.Content>
       <div>
            <ul>
                <li>id: {id}</li>
                <li>pseudo: {pseudo}</li>
                <li>email: {email}</li>
                <li>firstname {firstname}</li>
                <li>lastname {lastname}</li>
            </ul>
        </div> {/*TODO: stylisé l'affichage des information */}
      </Modal.Content>      
    </Modal>
  ) //TODO: faire un bouton delete 
}

UserModal.propTypes = {
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    id: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    pseudo: PropTypes.string.isRequired,
};


export default UserModal
