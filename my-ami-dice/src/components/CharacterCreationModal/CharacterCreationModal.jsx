import React, { useReducer, useState } from "react";
import { Button, Form, Modal } from "semantic-ui-react";

import api from "../../api";


function CharacterCreationModal() {
    const [firstOpen, setFirstOpen] = useState(true);
    const [secondOpen, setSecondOpen] = useState(false);
    const [thirdOpen, setThirdOpen] = useState(false);
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
        item1name: "",
        item1quantity: "",
        item1description: "",
        
        /* items: [
            {
                name: "",
                quantity: "",
                description: ""
            },
            {
                name: "",
                quantity: "",
                description: ""
            },
            {
                name: "",
                quantity: "",
                description: ""
            },
            {
                name: "",
                quantity: "",
                description: ""
            },
            {
                name: "",
                quantity: "",
                description: ""
            },
        ],
        skills: [
            {
                name: "",
                description: "",
            },
            {
                name: "",
                description: "",
            },
            {
                name: "",
                description: "",
            },
            {
                name: "",
                description: "",
            },
            {
                name: "",
                description: "",
            },
        ] */
    }

    const SAVE_FORM = "SAVE_FORM";
    const actionSaveForm = (name, value) => ({type: SAVE_FORM, payload: {name, value}});

    /* const SAVE_ITEM = "SAVE_ITEM";
    const actionSaveItem = (name, value) => ({type: SAVE_ITEM, payload: {name, value}}); */

    function reducer(state, action) {
        switch (action.type) {
            case SAVE_FORM:
                return {
                    ...state,
                    [action.payload.name]: action.payload.value,
                };
            /* case SAVE_ITEM:
console.log(action.payload.name, " = ", action.payload.value);
console.log("items", items); // Undefined
console.log("state.items", state.items);
                return {
                    ...state,
                    items: [
                        ...state.items,
                        [action.payload.name]= action.payload.value,
                    ]
                }; */
                default: {
                    throw new Error ("Action non reconnue");
                }
            }
        }

    const [state, dispatch] = useReducer (reducer, initialState);

    function handleChange(event) {
console.log(event.target.name, " = ", event.target.value);
        dispatch(actionSaveForm(event.target.name, event.target.value));
    };

    function handleChangeItem(event) {
        console.log(event.target.name, " = ", event.target.value);
                dispatch(actionSaveItem(event.target.name, event.target.value));
            };


    function handleSubmitCharacter(event) {
        event.preventDefault();
        setFirstOpen(false);
        setSecondOpen(true);

        try {
        } catch (error) {
            
        }
    }

  return (
    <>
            
            {/* 1ère modale (Form Character) */}
            <Modal
                onClose={() => setFirstOpen(false)}
                onOpen={() => setFirstOpen(true)}
                open={firstOpen}
            >
                <Modal.Header>Je crée mon personnage !</Modal.Header>
                <Modal.Content>
                    <Form onSubmit={handleSubmitCharacter}
                    unstackable>
                    
                        {/* // Données pour la table Character */}
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

                        {/* // Données pour la table Characteristics */}
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

                        <Button
                            type="submit"
                            negative
                        >
                            Valider et passer à l'équipement
                        </Button>
                    </Form>
                </Modal.Content>    
            </Modal>       

            {/* 2e modale (Form Items) */}
            <Modal
                onClose={() => setSecondOpen(false)}
                open={secondOpen}
                size="small"
            >
                <Modal.Header>Equipement</Modal.Header>
                <Modal.Content>
                    <Form onSubmit={() => {
                        setSecondOpen(false);
                        setThirdOpen(true);
                        }}
                        unstackable>
                        <Form.Group widths={2} >
                            <Form.Input
                                label="Nom de l'objet"
                                type="text"
                                name="items[0].name"
                                value={state.items[0].name}
                                onChange={handleChangeItem}
                            />
                             <Form.Input
                                label="Quantité"
                                type="number"
                                name="items[0].quantity"
                                value={state.items[0].quantity}
                                onChange={handleChangeItem}
                            />
                            <Form.TextArea
                                label="Description"
                                name="items[0].description"
                                value={state.items[0].description}
                                onChange={handleChangeItem}
                                inline
                            />
                        </Form.Group>
                   {/*      <Form.Group widths={2} >
                            <Form.Input
                                label="Nom de l'objet"
                                type="text"
                                name="name"
                                value={state.item2.name}
                                onChange={handleChange}
                            />
                             <Form.Input
                                label="Quantité"
                                type="number"
                                name="quantity"
                                value={state.item2.quantity}
                                onChange={handleChange}
                            />
                            <Form.TextArea
                                label="Description"
                                name="description"
                                value={state.item2.description}
                                onChange={handleChange}
                                inline
                            />
                        </Form.Group>
                        <Form.Group widths={2} >
                            <Form.Input
                                label="Nom de l'objet"
                                type="text"
                                name="name"
                                value={state.item3.name}
                                onChange={handleChange}
                            />
                             <Form.Input
                                label="Quantité"
                                type="number"
                                name="quantity"
                                value={state.item3.quantity}
                                onChange={handleChange}
                            />
                            <Form.TextArea
                                label="Description"
                                name="description"
                                value={state.item3.description}
                                onChange={handleChange}
                                inline
                            />
                        </Form.Group>
                        <Form.Group widths={2} >
                            <Form.Input
                                label="Nom de l'objet"
                                type="text"
                                name="name"
                                value={state.item4.name}
                                onChange={handleChange}
                            />
                             <Form.Input
                                label="Quantité"
                                type="number"
                                name="quantity"
                                value={state.item4.quantity}
                                onChange={handleChange}
                            />
                            <Form.TextArea
                                label="Description"
                                name="description"
                                value={state.item4.description}
                                onChange={handleChange}
                                inline
                            />
                        </Form.Group>
                        <Form.Group widths={2} >
                            <Form.Input
                                label="Nom de l'objet"
                                type="text"
                                name="name"
                                value={state.item5.name}
                                onChange={handleChange}
                            />
                             <Form.Input
                                label="Quantité"
                                type="number"
                                name="quantity"
                                value={state.item5.quantity}
                                onChange={handleChange}
                            />
                            <Form.TextArea
                                label="Description"
                                name="description"
                                value={state.item5.description}
                                onChange={handleChange}
                                inline
                            />
                        </Form.Group> */}

                        <Button type= "submit" negative >Valider et passer aux compétences</Button>
                    </Form>
                </Modal.Content>
            </Modal>

            {/* 3e modale (Form Skills) */}
            <Modal
                onClose={() => setThirdOpen(false)}
                open={thirdOpen}
                size="small"
            >
                <Modal.Header>Compétences</Modal.Header>
                <Modal.Content>
                    <Form onSubmit={() => {
                        setConfirmOpen(true);
                        setThirdOpen(false);
                        }}
                        unstackable>
                        <Form.Group widths={2} >
                            <Form.Input
                                label="Nom de la compétence"
                                type="text"
                                name="name"
                                value=""
                                onChange={handleChange}
                            />
                            <Form.TextArea
                                label="Description"
                                name="description"
                                value=""
                                onChange={handleChange}
                                inline
                            />
                        </Form.Group>
                        <Form.Group widths={2} >
                            <Form.Input
                                label="Nom de la compétence"
                                type="text"
                                name="name"
                                value=""
                                onChange={handleChange}
                            />
                            <Form.TextArea
                                label="Description"
                                name="description"
                                value=""
                                onChange={handleChange}
                                inline
                            />
                        </Form.Group>
                        <Form.Group widths={2} >
                            <Form.Input
                                label="Nom de la compétence"
                                type="text"
                                name="name"
                                value=""
                                onChange={handleChange}
                            />
                            <Form.TextArea
                                label="Description"
                                name="description"
                                value=""
                                onChange={handleChange}
                                inline
                            />
                        </Form.Group>
                        <Form.Group widths={2} >
                            <Form.Input
                                label="Nom de la compétence"
                                type="text"
                                name="name"
                                value=""
                                onChange={handleChange}
                            />
                            <Form.TextArea
                                label="Description"
                                name="description"
                                value=""
                                onChange={handleChange}
                                inline
                            />
                        </Form.Group>
                        <Form.Group widths={2} >
                            <Form.Input
                                label="Nom de la compétence"
                                type="text"
                                name="name"
                                value=""
                                onChange={handleChange}
                            />
                            <Form.TextArea
                                label="Description"
                                name="description"
                                value=""
                                onChange={handleChange}
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
