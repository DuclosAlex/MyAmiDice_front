import React, { useReducer, useState } from "react"
import { Button, Form, Modal } from "semantic-ui-react"
import './style.scss'

function CharacterCreationModal() {
    const [firstOpen, setFirstOpen] = useState(false);
    const [secondOpen, setSecondOpen] = useState(false);
    const [thirdOpen, setThirdOpen] = useState(false);
    const [fourthOpen, setFourthOpen] = useState(false);
    const [confirmOpen, setConfirmOpen] = useState(false);
    
    const initialState = {
        firstName: "",
        lastName: "",
        description: "",
        race: "",
        class: "",
        strength: "",
        dexterity: "",
        constitution: "",
        intelligence: "",
        wisdom: "",
        charisma: "",
        hp: "",
        level: "",
        items: [],
        skills: [],
    }

    const SAVE_FORM = "SAVE_FORM";
    const actionSaveForm = (name, value) => ({type: SAVE_FORM, payload: {name, value}});

    function reducer(state, action) {
        switch (action.type) {
            case SAVE_FORM:
                return {
                    ...state,
                    [action.payload.name]: action.payload.value,
                };
            default: {
                throw new Error ("Action non reconnue");
            }
        }
    }

    const [state, dispatch] = useReducer (reducer, initialState);

    function handleChange(event) {
        dispatch(actionSaveForm(event.target.name, event.target.value));
    };

    function handleSubmit(event) {
        event.preventDefault();
console.log("Dans le handleSubmit ok") //TODO: je ne passe pas dans la fonction, pourquoi ?
        try {
            
        } catch (error) {
            
        }
    }


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
                        handleSubmit;
console.log("onSubmit : ok");
                        }}
                    unstackable>
                    
                        <Form.Input
                            label="Prénom"
                            type="text"
                            name="firstName"
                            value={state.firstName} 
                            onChange={handleChange}
                            inline 
                            required
                        />
                        <Form.Input 
                            label="Nom"
                            type="text"
                            name="lastName"
                            value={state.lastName}
                            onChange={handleChange}
                            inline
                            required
                        />
                        <Form.TextArea
                            label="Description"
                            name="description"
                            value={state.description}
                            onChange={handleChange}
                            inline
                            required
                        />
                        <Form.Input
                            label="Race"
                            type="text"
                            name="race"
                            value={state.race}
                            onChange={handleChange}
                            inline
                            required
                        />
                        <Button
                            type="submit"
                            negative
                        >
                            Valider et passer aux caractéristiques
                        </Button>
                    </Form>
                </Modal.Content>    
            </Modal>

            {/* 2e modale (Form Characteristics) */}
            <Modal
                closeOnEscape={false}
                closeOnDimmerClick={false}
                onClose={() => setSecondOpen(false)}
                open={secondOpen}
                size="large"
            >
                <Modal.Header>Caractéristiques</Modal.Header>
                <Modal.Content>
                    <Form onSubmit={() => {
                        setSecondOpen(false);
                        setThirdOpen(true);
                        handleSubmit;
                        }}
                        unstackable>
                        <Form.Input
                            label="Classe"
                            type="text"
                            name="class"
                            value={state.class}
                            onChange={handleChange}
                            inline
                            required
                        />
                        <Form.Input
                            label="Force"
                            type="number"
                            name="strength"
                            value={state.strength}
                            onChange={handleChange}
                            inline
                            required
                        />
                        <Form.Input
                            label="Dextérité"
                            type="number"
                            name="dexterity"
                            value={state.dexterity}
                            onChange={handleChange}
                            inline
                            required
                        />
                        <Form.Input
                            label="Constitution"
                            type="number"
                            name="constitution"
                            value={state.constitution}
                            onChange={handleChange}
                            inline
                            required
                        />
                        <Form.Input
                            label="Intelligence"
                            type="number"
                            name="intelligence"
                            value={state.intelligence}
                            onChange={handleChange}
                            inline
                            required
                        />
                        <Form.Input
                            label="Sagesse"
                            type="number"
                            name="wisdom"
                            value={state.wisdom}
                            onChange={handleChange}
                            inline
                            required
                        />
                        <Form.Input
                            label="Charisme"
                            type="number"
                            name="charisma"
                            value={state.charisma}
                            onChange={handleChange}
                            inline
                            required
                        />
                        <Form.Input
                            label="Points de vie"
                            type="number"
                            name="hp"
                            value={state.hp}
                            onChange={handleChange}
                            inline
                            required
                        />
                        <Form.Input
                            label="Niveau"
                            type="number"
                            name="level"
                            value={state.level}
                            onChange={handleChange}
                            inline
                            required
                        />
                        
                        <Button type= "submit" negative >Valider et passer à l"équipement</Button>
                    </Form>
                </Modal.Content>
            </Modal>

            {/* 3e modale (Form Items) */}
            <Modal
                onClose={() => setThirdOpen(false)}
                open={thirdOpen}
                size="small"
            >
                <Modal.Header>Equipement</Modal.Header>
                <Modal.Content>
                    <Form onSubmit={() => {
                        setThirdOpen(false);
                        setFourthOpen(true);
                        }}
                        unstackable>
                        <Form.Group widths={2} >
                            <Form.Input
                                label="Nom de l'objet"
                                type="text"
                            />
                            <Form.TextArea
                                label="Description"
                                inline
                            />
                        </Form.Group>
                        <Form.Group widths={2} >
                            <Form.Input
                                label="Nom de l'objet"
                                type="text"
                            />
                            <Form.TextArea
                                label="Description"
                                inline
                            />
                        </Form.Group>
                        <Form.Group widths={2} >
                            <Form.Input
                                label="Nom de l'objet"
                                type="text"
                            />
                            <Form.TextArea
                                label="Description"
                                inline
                            />
                        </Form.Group>
                        <Form.Group widths={2} >
                            <Form.Input
                                label="Nom de l'objet"
                                type="text"
                            />
                            <Form.TextArea
                                label="Description"
                                inline
                            />
                        </Form.Group>
                        <Form.Group widths={2} >
                            <Form.Input
                                label="Nom de l'objet"
                                type="text"
                            />
                            <Form.TextArea
                                label="Description"
                                inline
                            />
                        </Form.Group>

                        <Button type= "submit" negative >Valider et passer aux compétences</Button>
                    </Form>
                </Modal.Content>
            </Modal>

            {/* 4e modale (Form Skills) */}
            <Modal
                onClose={() => setFourthOpen(false)}
                open={fourthOpen}
                size="small"
            >
                <Modal.Header>Compétences</Modal.Header>
                <Modal.Content>
                    <Form onSubmit={() => {
                        setConfirmOpen(true);
                        setFourthOpen(false);
                        }}
                        unstackable>
                        <Form.Group widths={2} >
                            <Form.Input
                                label="Nom de la compétence"
                                type="text"
                            />
                            <Form.TextArea
                                label="Description"
                                inline
                            />
                        </Form.Group>
                        <Form.Group widths={2} >
                            <Form.Input
                                label="Nom de la compétence"
                                type="text"
                            />
                            <Form.TextArea
                                label="Description"
                                inline
                            />
                        </Form.Group>
                        <Form.Group widths={2} >
                            <Form.Input
                                label="Nom de la compétence"
                                type="text"
                            />
                            <Form.TextArea
                                label="Description"
                                inline
                            />
                        </Form.Group>
                        <Form.Group widths={2} >
                            <Form.Input
                                label="Nom de la compétence"
                                type="text"
                            />
                            <Form.TextArea
                                label="Description"
                                inline
                            />
                        </Form.Group>
                        <Form.Group widths={2} >
                            <Form.Input
                                label="Nom de la compétence"
                                type="text"
                            />
                            <Form.TextArea
                                label="Description"
                                inline
                            />
                        </Form.Group>

                        <Button type= "submit" negative >Valider mon personnage !</Button>
                    </Form>
                </Modal.Content>
            </Modal>

            {/* Modale de confirmation de création de personnage en BDD */}
            <Modal
                onClose={() => (setConfirmOpen(false))}
                open={confirmOpen}
                size={"tiny"}
      >
        <Modal.Header>Confirmation de création de personnage</Modal.Header>
        <Modal.Content>
          <p>Félicitations, vous êtes prêt pour partir à l"aventure !</p>
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={() => setConfirmOpen(false)}>
            C"est parti !
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  )
}

export default CharacterCreationModal;
