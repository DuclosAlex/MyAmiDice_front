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
    }

    const initialSecondState = {
        firstItem: {
                name: "",
                quantity: "",
                description: ""
            },
        secondItem:{
                name: "",
                quantity: "",
                description: ""
            },
        thirdItem:{
                name: "",
                quantity: "",
                description: ""
            },
        fourthItem:{
                name: "",
                quantity: "",
                description: ""
            },
        fifthItem:{
                name: "",
                quantity: "",
                description: ""
            },        
    }

    const initialThirdState= {
        firstSkill:{
                name: "",
                description: "",
            },
        secondSkill:{
                name: "",
                description: "",
            },
        thirdSkill:{
                name: "",
                description: "",
            },
        fourthSkill:{
                name: "",
                description: "",
            },
        fifthSkill:{
                name: "",
                description: "",
            },
       

    }
        
    
    
    const SAVE_FORM = "SAVE_FORM";
    const actionSaveForm = (name, value) => ({type: SAVE_FORM, payload: {name, value}});
    
   
    const SAVE_FIRSTITEM = "SAVE_FIRSTITEM";
    const SAVE_SECONDITEM = "SAVE_SECONDITEM";
    const SAVE_THIRDITEM = "SAVE_THIRDITEM";
    const SAVE_FOURTHITEM = "SAVE_FOURTHITEM";
    const SAVE_FIFTHITEM = "SAVE_FIFTHITEM";

    const SAVE_FIRSTSKILL = "SAVE_FIRSTSKILL";
    const SAVE_SECONDSKILL = "SAVE_SECONDSKILL";
    const SAVE_THIRDSKILL = "SAVE_THIRDSKILL";
    const SAVE_FOURTHSKILL = "SAVE_FOURTHSKILL";
    const SAVE_FIFTHSKILL = "SAVE_FIFTHSKILL";
    
    const actionSaveFirstItem = (name, value) => ({type: SAVE_FIRSTITEM, payload: {name, value}});
    const actionSaveSecondItem = (name, value) => ({type: SAVE_SECONDITEM, payload: {name, value}});
    const actionSaveThirdItem = (name, value) => ({type: SAVE_THIRDITEM, payload: {name, value}});
    const actionSaveFourthItem = (name, value) => ({type: SAVE_FOURTHITEM, payload: {name, value}});
    const actionSaveFifthItem = (name, value) => ({type: SAVE_FIFTHITEM, payload: {name, value}});

    const actionSaveFirstSkill = (name, value) => ({type: SAVE_FIRSTSKILL, payload: {name, value}});
    const actionSaveSecondSkill = (name, value) => ({type: SAVE_SECONDSKILL, payload: {name, value}});
    const actionSaveThirdSkill = (name, value) => ({type: SAVE_THIRDSKILL, payload: {name, value}});
    const actionSaveFourthSkill = (name, value) => ({type: SAVE_FOURTHSKILL, payload: {name, value}});
    const actionSaveFifthSkill = (name, value) => ({type: SAVE_FIFTHSKILL, payload: {name, value}});
    
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
    
    function secondReducer(secondState, action){
        switch (action.type) {
            case SAVE_FIRSTITEM:
                return {
                    ...secondState,
                    firstItem:{
                        ...secondState.firstItem,
                        [action.payload.name]: action.payload.value,
                    }
                }            
            case SAVE_SECONDITEM:
                return {
                    ...secondState,
                    secondItem:{
                        ...secondState.secondItem,
                        [action.payload.name]: action.payload.value,
                    }
                }    
            case SAVE_THIRDITEM:
                return {
                    ...secondState,
                    thirdItem:{
                        ...secondState.thirdItem,
                        [action.payload.name]: action.payload.value,
                    }
                }
            case SAVE_FOURTHITEM:
                return {
                    ...secondState,
                    fourthItem:{
                        ...secondState.fourthItem,
                        [action.payload.name]: action.payload.value,
                    }
                }
            case SAVE_FIFTHITEM:
                return {
                    ...secondState,
                    fifthItem:{
                        ...secondState.fifthItem,
                        [action.payload.name]: action.payload.value,
                    }
                }    
            default: {
                throw new Error ("Action non reconnue");
            }
            }
        }

        function thirdReducer(thirdState, action){
            switch (action.type) {
                case SAVE_FIRSTSKILL:
                    return {
                        ...thirdState,
                        firstSkill:{
                            ...thirdState.firstSkill,
                            [action.payload.name]: action.payload.value,
                        }
                    }            
                case SAVE_SECONDSKILL:
                    return {
                        ...thirdState,
                        secondSkill:{
                            ...thirdState.secondSkill,
                            [action.payload.name]: action.payload.value,
                        }
                    }    
                case SAVE_THIRDSKILL:
                    return {
                        ...thirdState,
                        thirdSkill:{
                            ...thirdState.thirdSkill,
                            [action.payload.name]: action.payload.value,
                        }
                    }
                case SAVE_FOURTHSKILL:
                    return {
                        ...thirdState,
                        fourthSkill:{
                            ...thirdState.fourthSkill,
                            [action.payload.name]: action.payload.value,
                        }
                    }
                case SAVE_FIFTHSKILL:
                    return {
                        ...thirdState,
                        fifthSkill:{
                            ...thirdState.fifthSkill,
                            [action.payload.name]: action.payload.value,
                        }
                    }    
                default: {
                    throw new Error ("Action non reconnue");
                }
                }
            }
        
        
        const [state, dispatch] = useReducer (reducer, initialState);
        const [secondState, secondDispatch] = useReducer(secondReducer, initialSecondState) 
        const [thirdState, thirdDispatch] = useReducer(thirdReducer, initialThirdState) 
        
        function handleChange(event) {
            console.log(event.target.name, " = ", event.target.value);
                dispatch(actionSaveForm(event.target.name, event.target.value));
            };

        function handleChangeFirstItem(event) {
            console.log(event.target.name, " = ", event.target.value);
            secondDispatch(actionSaveFirstItem(event.target.name, event.target.value));
        };
        function handleChangeSecondItem(event) {
            console.log(event.target.name, " = ", event.target.value);
            secondDispatch(actionSaveSecondItem(event.target.name, event.target.value));
        };
        function handleChangeThirdItem(event) {
            console.log(event.target.name, " = ", event.target.value);
            secondDispatch(actionSaveThirdItem(event.target.name, event.target.value));
        };
        function handleChangeFourthItem(event) {
            console.log(event.target.name, " = ", event.target.value);
            secondDispatch(actionSaveFourthItem(event.target.name, event.target.value));
        };
        function handleChangeFifthItem(event) {
            console.log(event.target.name, " = ", event.target.value);
            secondDispatch(actionSaveFifthItem(event.target.name, event.target.value));
        };

        function handleChangeFirstSkill(event) {
            console.log(event.target.name, " = ", event.target.value);
            thirdDispatch(actionSaveFirstSkill(event.target.name, event.target.value));
        };
        function handleChangeSecondSkill(event) {
            console.log(event.target.name, " = ", event.target.value);
            thirdDispatch(actionSaveSecondSkill(event.target.name, event.target.value));
        };
        function handleChangeThirdSkill(event) {
            console.log(event.target.name, " = ", event.target.value);
            thirdDispatch(actionSaveThirdSkill(event.target.name, event.target.value));
        };
        function handleChangeFourthSkill(event) {
            console.log(event.target.name, " = ", event.target.value);
            thirdDispatch(actionSaveFourthSkill(event.target.name, event.target.value));
        };
        function handleChangeFifthSkill(event) {
            console.log(event.target.name, " = ", event.target.value);
            thirdDispatch(actionSaveFifthSkill(event.target.name, event.target.value));
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
                                name="name"
                                value={secondState.firstItem.name}
                                onChange={handleChangeFirstItem}
                            />
                             <Form.Input
                                label="Quantité"
                                type="number"
                                name="quantity"
                                value={secondState.firstItem.quantity}
                                onChange={handleChangeFirstItem}
                            />
                            <Form.TextArea
                                label="Description"
                                name="description"
                                value={secondState.firstItem.description}
                                onChange={handleChangeFirstItem}
                                inline
                            />
                        </Form.Group>
                         <Form.Group widths={2} >
                            <Form.Input
                                label="Nom de l'objet"
                                type="text"
                                name="name"
                                value={secondState.secondItem.name}
                                onChange={handleChangeSecondItem}
                            />
                             <Form.Input
                                label="Quantité"
                                type="number"
                                name="quantity"
                                value={secondState.secondItem.quantity}
                                onChange={handleChangeSecondItem}
                            />
                            <Form.TextArea
                                label="Description"
                                name="description"
                                value={secondState.secondItem.description}
                                onChange={handleChangeSecondItem}
                                inline
                            />
                        </Form.Group>
                        <Form.Group widths={2} >
                            <Form.Input
                                label="Nom de l'objet"
                                type="text"
                                name="name"
                                value={secondState.thirdItem.name}
                                onChange={handleChangeThirdItem}
                            />
                             <Form.Input
                                label="Quantité"
                                type="number"
                                name="quantity"
                                value={secondState.thirdItem.quantity}
                                onChange={handleChangeThirdItem}
                            />
                            <Form.TextArea
                                label="Description"
                                name="description"
                                value={secondState.thirdItem.description}
                                onChange={handleChangeThirdItem}
                                inline
                            />
                        </Form.Group>
                        <Form.Group widths={2} >
                            <Form.Input
                                label="Nom de l'objet"
                                type="text"
                                name="name"
                                value={secondState.fourthItem.name}
                                onChange={handleChangeFourthItem}
                            />
                             <Form.Input
                                label="Quantité"
                                type="number"
                                name="quantity"
                                value={secondState.fourthItem.quantity}
                                onChange={handleChangeFourthItem}
                            />
                            <Form.TextArea
                                label="Description"
                                name="description"
                                value={secondState.fourthItem.description}
                                onChange={handleChangeFourthItem}
                                inline
                            />
                        </Form.Group>
                        <Form.Group widths={2} >
                            <Form.Input
                                label="Nom de l'objet"
                                type="text"
                                name="name"
                                value={secondState.fifthItem.name}
                                onChange={handleChangeFifthItem}
                            />
                             <Form.Input
                                label="Quantité"
                                type="number"
                                name="quantity"
                                value={secondState.fifthItem.quantity}
                                onChange={handleChangeFifthItem}
                            />
                            <Form.TextArea
                                label="Description"
                                name="description"
                                value={secondState.fifthItem.description}
                                onChange={handleChangeFifthItem}
                                inline
                            />
                        </Form.Group> 

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
                                value={thirdState.firstSkill.name}
                                onChange={handleChangeFirstSkill}
                            />
                            <Form.TextArea
                                label="Description"
                                name="description"
                                value={thirdState.firstSkill.description}
                                onChange={handleChangeFirstSkill}
                                inline
                            />
                        </Form.Group>
                        <Form.Group widths={2} >
                            <Form.Input
                                label="Nom de la compétence"
                                type="text"
                                name="name"
                                value={thirdState.secondSkill.name}
                                onChange={handleChangeSecondSkill}
                            />
                            <Form.TextArea
                                label="Description"
                                name="description"
                                value={thirdState.secondSkill.description}
                                onChange={handleChangeSecondSkill}
                                inline
                            />
                        </Form.Group>
                        <Form.Group widths={2} >
                        <Form.Input
                                label="Nom de la compétence"
                                type="text"
                                name="name"
                                value={thirdState.thirdSkill.name}
                                onChange={handleChangeThirdSkill}
                            />
                            <Form.TextArea
                                label="Description"
                                name="description"
                                value={thirdState.thirdSkill.description}
                                onChange={handleChangeThirdSkill}
                                inline
                            />
                        </Form.Group>
                        <Form.Group widths={2} >
                        <Form.Input
                                label="Nom de la compétence"
                                type="text"
                                name="name"
                                value={thirdState.fourthSkill.name}
                                onChange={handleChangeFourthSkill}
                            />
                            <Form.TextArea
                                label="Description"
                                name="description"
                                value={thirdState.fourthSkill.description}
                                onChange={handleChangeFourthSkill}
                                inline
                            />
                        </Form.Group>
                        <Form.Group widths={2} >
                        <Form.Input
                                label="Nom de la compétence"
                                type="text"
                                name="name"
                                value={thirdState.fifthSkill.name}
                                onChange={handleChangeFifthSkill}
                            />
                            <Form.TextArea
                                label="Description"
                                name="description"
                                value={thirdState.fifthSkill.description}
                                onChange={handleChangeFifthSkill}
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
          <p>Félicitations, vous êtes prêt pour partir à l'aventure !</p>
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
