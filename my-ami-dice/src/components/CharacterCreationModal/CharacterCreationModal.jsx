import React, { useState } from 'react'
import { Button, Form, Modal } from 'semantic-ui-react'


function CharacterCreationModal() {
    const [firstOpen, setFirstOpen] = useState(false);
    const [secondOpen, setSecondOpen] = useState(false);
    const [thirdOpen, setThirdOpen] = useState(false);
    const [fourthOpen, setFourthOpen] = useState(false);
    const [confirmOpen, setConfirmOpen] = useState(false);
    
  return (
    <>
        <Button onClick={() => setFirstOpen(true)} negative>Créer mon personnage !</Button>
            
            {/* 1ère modale (Form Character) */}
            <Modal
                onClose={() => setFirstOpen(false)}
                onOpen={() => setFirstOpen(true)}
                open={firstOpen}
            >
                <Modal.Header>Je crée mon personnage !</Modal.Header>
                <Modal.Content>
                    <Form onSubmit={() => {
                        setFirstOpen(false);
                        setSecondOpen(true);
                        }}
                    unstackable>
                    
                        <Form.Input label='Prénom' type="text" inline required />
                        <Form.Input label='Nom' type="text" inline required />
                        <Form.TextArea label='Description' inline required />
                        <Form.Input label='Race' type="text" inline required />
                    
                        <Button type='submit' negative >Valider et passer aux caractéristiques</Button>
                    </Form>
                </Modal.Content>    
            </Modal>

            {/* 2e modale (Form Characteristics) */}
            <Modal
                closeOnEscape={false}
                closeOnDimmerClick={false}
                onClose={() => setSecondOpen(false)}
                open={secondOpen}
                size='large'
            >
                <Modal.Header>Caractéristiques</Modal.Header>
                <Modal.Content>
                    <Form onSubmit={() => {
                        setSecondOpen(false);
                        setThirdOpen(true);
                        }}
                        unstackable>
                        <Form.Input label='Classe' type="text" inline required />
                        <Form.Input label='Force' type="number" inline required />
                        <Form.Input label='Dextérité' type="number" inline required />
                        <Form.Input label='Constitution' type="number" inline required />
                        <Form.Input label='Intelligence' type="number" inline required />
                        <Form.Input label='Sagesse' type="number" inline required />
                        <Form.Input label='Charisme' type="number" inline required />
                        <Form.Input label='Classe' type="text" inline required />
                        <Form.Input label='Points de vie' type="number" inline required />
                        <Form.Input label='Niveau' type="number" inline required />
                        
                        <Button type= 'submit' negative >Valider et passer à l'équipement</Button>
                    </Form>
                </Modal.Content>
            </Modal>

            {/* 3e modale (Form Items) */}
            <Modal
                onClose={() => setThirdOpen(false)}
                open={thirdOpen}
                size='small'
            >
                <Modal.Header>Equipement</Modal.Header>
                <Modal.Content>
                    <Form onSubmit={() => {
                        setThirdOpen(false);
                        setFourthOpen(true);
                        }}
                        unstackable>
                        <Form.Input label="Nom de l'équipement" type="text" inline required />
                        <Form.TextArea label='Description' inline required />

                        <Button type= 'submit' negative >Valider et passer aux compétences</Button>
                    </Form>
                </Modal.Content>
            </Modal>

            {/* 4e modale (Form Skills) */}
            <Modal
                onClose={() => setFourthOpen(false)}
                open={fourthOpen}
                size='small'
            >
                <Modal.Header>Compétences</Modal.Header>
                <Modal.Content>
                    <Form onSubmit={() => {
                        setConfirmOpen(true);
                        setFourthOpen(false);
                        }}
                        unstackable>
                        <Form.Input label='Nom de la compétence' type="text" inline required />
                        <Form.TextArea label='Description' inline required />
                        <Button type= 'submit' negative >Paré pour l'aventure !</Button>
                    </Form>
                </Modal.Content>
            </Modal>

            {/* Modale de confirmation de création de personnage en BDD */}
            <Modal
                onClose={() => (setConfirmOpen(false))}
                open={confirmOpen}
                size={'tiny'}
      >
        <Modal.Header>Confirmation de création de personnage</Modal.Header>
        <Modal.Content>
          <p>Félicitations, vous êtes prêt pour la méga aventure !</p>
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={() => setConfirmOpen(false)}>
            C'est parti !
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  )
}

export default CharacterCreationModal;
