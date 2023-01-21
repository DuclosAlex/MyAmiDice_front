import React, { useState } from 'react'
import { Button, Form, Icon, Modal, Segment } from 'semantic-ui-react'

function LoginSigninModal() {
  const [firstOpen, setFirstOpen] = useState(false);
  const [secondOpen, setSecondOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(false);


  return (
    <>
         
        {/* Si l'utilisateur est connecté, on affiche le bouton "Déconnexion" */}
        {isLogged ? 
            <Button onClick={setIsLogged(false)} negative>Déconnexion</Button>
         :        
            /* Sinon, on affiche le bouton "Connexion" */
            <Button onClick={() => setFirstOpen(true)} negative>Connexion</Button>
        }
            
            {/* 1ère modale (connexion) */}
            <Modal
                size='tiny'
                onClose={() => setFirstOpen(false)}
                onOpen={() => setFirstOpen(true)}
                open={firstOpen}
            >
                <Modal.Header>Connexion</Modal.Header>
                <Modal.Content>
                    <Form unstackable>
                    <Form.Group widths={2}>
                        <Form.Input placeholder='Email' required />
                        <Form.Input type="password" placeholder='Mot de passe' required />
                    </Form.Group>
                    <Form.Checkbox label='Je ne suis pas ChatGPT' required />
                    <Button type='submit' negative >Je me connecte !</Button>
                    </Form>
                </Modal.Content>
        
            <Modal.Actions>
                <Button onClick={() => setSecondOpen(true)} >
                    Créer un compte <Icon name='right chevron' />
                </Button>
            </Modal.Actions>

            {/* 2e modale (création de compte) */}
            <Modal
                onClose={() => setSecondOpen(false)}
                open={secondOpen}
                size='small'
            >
            <Modal.Header>Création de compte</Modal.Header>
            <Modal.Content>
                <Form unstackable>
            
                        <Form.Input label='Pseudo' placeholder='Pseudo' required />
                        <Form.Input label='Email' placeholder='Email' required />
                    
                    
                        <Form.Input label='Prénom' placeholder='Nom' />
                        <Form.Input label='Nom' placeholder='Nom' />
                    
                    
                        <Form.Input type="password" label='Mot de passe' placeholder='Mot de passe' required />
                        <Form.Input type="password" label='Confirmation du mot de passe' placeholder='Confirmation du mot de passe' required />
                    
            
                <Form.Checkbox label='Je ne suis pas ChatGPT' required/>
                <Button type='submit' negative>Je crée mon compte !</Button>
            </Form>
          </Modal.Content>
        </Modal>
      </Modal>
    </>
  )
}

export default LoginSigninModal;
