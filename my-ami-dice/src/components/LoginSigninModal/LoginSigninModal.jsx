import React, { useState, useReducer } from 'react';
import api from "../../api";
import { Button, Form, Icon, Modal } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';

function LoginSigninModal() {

    const navigate = useNavigate();

    const [firstOpen, setFirstOpen] = useState(false);
    const [secondOpen, setSecondOpen] = useState(false);

/*     const [pseudo, setPseudo] = useState("");
    const [emailSignin, setEmailSignin] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [passwordSignin, setPasswordSignin] = useState("");
    const [confirmPasswordSignin, setConfirmPasswordSignin] = useState(""); */

    const initialState = {
        isLogged: false,
        email: "",
        password: "",
        token: "",

        pseudo: "",
        emailSignin: "",
        firstName: "",
        lastName: "",
        passwordSignin: "",
        confirmPasswordSignin: "",
    }

    
    const SAVE_FORM = "SAVE_FORM";
    const actionSaveForm = (name, value) => ({type: SAVE_FORM, payload: {name, value}});

    const LOGIN = "LOGIN";
    const actionLogin = (email, password) => ({ type: LOGIN, payload: {email, password}});

    const LOGOUT = "LOGOUT";
    const actionLogout = () => ({ type: LOGOUT });

    function userReducer(state, action) {
        switch (action.type) {
            case LOGIN: 
                return {
                    ...state,
                    isLogged: true,
                    token: action.payload.token
                };
            
            case LOGOUT:
                return {
                    ...state,
                    isLogged: false
                }
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

    const [state, dispatch] = useReducer(userReducer, initialState);

    function handleChange(event) {
        dispatch(actionSaveForm(event.target.name, event.target.value));
    }

    async function handleLogin(event) {
        event.preventDefault();
        try {
            await api.post("/login", {
                email: state.email,
                password: state.password
            })
            
            api.defaults.headers.common.Authorization = `Bearer ${res.data.token}`
                
            dispatch({
                type: LOGIN,
                payload: {
                    email: res.data.email,
                    token: res.data.token
                }
            })  
            navigate("home/user");
        } catch (error) {
            throw new Error (error);
        }
    }
  
    function handleLogout() {
        setIsLogged(false);
        setToken("");
    }

    function handleSignin(event) {
        event.preventDefault();
        const formData = {
            pseudo: state.pseudo,
            email: state.email,
            password: state.passwordSignin,
            firstName: state.firstName,
            lastName: state.lastName
        }

        api.post("/signin", {
            formData
        })
        .then(res => {
            
        })
        .catch(error => {
            throw new Error (error);
        })
    }

    return (
        <>
            {/* Si l'utilisateur est connecté, on affiche le bouton "Déconnexion", sinon "Connexion */} 
            {state.isLogged ? (
                <Button onClick={handleLogout} negative>Déconnexion</Button>
            ) : ( 
                <>
                    <Button onClick={() => setFirstOpen(true)} negative>Connexion</Button>

                    {/* 1ère modale (connexion) */}
                    <Modal
                        size='tiny'
                        onClose={() => setFirstOpen(false)}
                        onOpen={() => setFirstOpen(true)}
                        open={firstOpen}
                    >
                        <Modal.Header>Connexion</Modal.Header>
                        <Modal.Content>
                            <Form
                                onSubmit={handleLogin}
                                unstackable
                            >
                                <Form.Group
                                    widths={2}
                                >
                                    <Form.Input
                                        placeholder='Email'
                                        name="email"
                                        value={state.email}
                                        onChange={handleChange}
                                        required
                                    />
                                    <Form.Input
                                        type="password"
                                        placeholder='Mot de passe'
                                        name="password"
                                        value={state.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                                <Form.Checkbox
                                    label='Je ne suis pas ChatGPT'
                                    required
                                />
                                <Button
                                    type='submit'
                                    negative
                                >
                                    Je me connecte !
                                </Button>
                            </Form>
                        </Modal.Content>
                
                        <Modal.Actions>
                            <Button
                                onClick={() => setSecondOpen(true)}
                            >
                                Créer un compte
                                <Icon
                                    name='right chevron'
                                />
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
                                <Form 
                                    onSubmit={handleSignin}
                                    unstackable>
                                    <Form.Input
                                        label='Pseudo'
                                        placeholder='Pseudo'
                                        name="pseudo"
                                        value={state.pseudo}
                                        onChange={handleChange}
                                        required
                                    />
                                    <Form.Input
                                        label='Email'
                                        placeholder='Email'
                                        name="emailSignin"
                                        value={state.emailSignin}
                                        onChange={handleChange}
                                        required
                                    />
                                    <Form.Input
                                        label='Prénom'
                                        placeholder="Prénom"
                                        name="firstName"
                                        value={state.firstName}
                                        onChange={handleChange}
                                    />
                                    <Form.Input
                                        label='Nom'
                                        placeholder='Nom'
                                        name="lastName"
                                        value={state.lastName}
                                        onChange={handleChange}
                                    />
                                    <Form.Input
                                        type="password"
                                        label='Mot de passe'
                                        placeholder='Mot de passe'
                                        name="passwordSignin"
                                        value={state.passwordSignin}
                                        onChange={handleChange}
                                        required
                                    />
                                    <Form.Input
                                        type="password"
                                        label='Confirmation du mot de passe'
                                        placeholder='Confirmation du mot de passe'
                                        name="confirmPasswordSignin"
                                        value={state.confirmPasswordSignin}
                                        onChange={handleChange}
                                        required
                                    />
                                    <Form.Checkbox
                                        label='Je ne suis pas ChatGPT'
                                        required
                                    />
                                    <Button type='submit' negative>Je crée mon compte !</Button>
                                </Form>
                            </Modal.Content>
                        </Modal>
                    </Modal>
                </>
            )}
        </>
    );
}

export default LoginSigninModal;
