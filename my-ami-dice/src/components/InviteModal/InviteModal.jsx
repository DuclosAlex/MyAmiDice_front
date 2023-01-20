import React, { useState } from 'react';
import { Button, Modal, Header } from 'semantic-ui-react';

const master = 'master';
const gameName = 'name'

function InviteModal() {
  const [open, setOpen] = useState(false)

  return (
    <Modal
      trigger={<Button>Invitation</Button>}
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header content='Invitation en cours' />
      <Modal.Content>
        <p>
          Vous avez été invité par {master} pour participé a la partie {gameName}
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button color='grey' onClick={() => setOpen(false)}> Refuser
        </Button>
        <Button color='grey' onClick={() => setOpen(false)}> Accepter
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default InviteModal
