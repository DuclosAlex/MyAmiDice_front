import React, { useState, useReducer } from 'react';
import api from "../../api";
import { Button, Form, Icon, Modal } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';  

import validator from "email-validator";

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
        // token: "",
        error: "",

        pseudo: "",
        emailSignin: "",
        emailConfirmSignin: "",
        firstName: "",
        lastName: "",
        passwordSignin: "",
        confirmPasswordSignin: "",
    }

    // A chaque ouverture / fermeture d'une modale, on reset error.
    useEffect(() => {
        dispatch({
            type: RESET_ERROR,
        });
        dispatch({
            type: RESET_FORM,
        });

    }, [firstOpen, secondOpen])

    const SAVE_FORM = "SAVE_FORM";
    const actionSaveForm = (name, value) => ({type: SAVE_FORM, payload: {name, value}});

    const LOGIN = "LOGIN";
    // const actionLogin = (email, password) => ({ type: LOGIN, payload: {email, password}});

    const LOGOUT = "LOGOUT";
    // const actionLogout = () => ({ type: LOGOUT });

    const ERROR = "ERROR";

    const RESET_ERROR = "RESET_ERROR";

    const RESET_FORM = "RESET_FORM"

    function userReducer(state, action) {
        switch (action.type) {
            case LOGIN: 
                return {
                    ...state,
                    isLogged: true,
                    // token: action.payload.token
                };
            
            case LOGOUT:
                return {
                    ...state,
                    isLogged: false,
                    // token: ''
                }
            case SAVE_FORM:
                return {
                    ...state,
                    [action.payload.name]: action.payload.value,
                };
            case ERROR:
                return {
                    ...state,
                    error: action.payload.error,
                };
            case RESET_ERROR:
                return {
                    ...state,
                    error: "",
                }
            case RESET_FORM:
                return {
                    ...state,
                    email: "",
                    password: "",
                    error: "",
                    pseudo: "",
                    emailSignin: "",
                    emailConfirmSignin: "",
                    firstName: "",
                    lastName: "",
                    passwordSignin: "",
                    confirmPasswordSignin: "",
                }

            default: {
                throw new Error ("Action non reconnue");
            }
        }

    }    

    const [state, dispatch] = useReducer(userReducer, initialState);

    function handleChange(event) {
        dispatch(actionSaveForm(event.target.name, event.target.value));
    }

    function isValidPassword(password) {
        let pattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])(?=.{10,})/;
        return pattern.test(password);
      }
    
    async function handleLogin(event) {
        event.preventDefault();

        try {
            const userInfos = await api.post("/login", { //TODO: récup les infos user et mettre dans localStorage
                email: state.email,
                password: state.password
            })
            if (response.data.status === 'success') {
                // On stocke le token dans le localStorage
                localStorage.setItem("token", response.data.token);
                api.defaults.headers.common.Authorization = `Bearer ${res.data.token}`
                
                dispatch({
                    type: LOGIN,
                    payload: {
                        email: res.data.email
                        // token: res.data.token
                    }
                });
            } else {
                dispatch({
                    type: ERROR,
                    payload: { error: "Email ou mot de passe incorrect." },
                  });
            }

            navigate("home/user");
        } catch (error) {
            throw new Error (error);
        }
    }
  
    function handleLogout() {
        localStorage.removeItem("token");
        dispatch({
            type: "LOGOUT",
          });
    }

    async function handleSignin(event) {
        event.preventDefault();
        
        const formData = {
            pseudo: state.pseudo.trim(),
            email: state.email.trim(),
            password: state.passwordSignin,
            firstName: state.firstName.trim(),
            lastName: state.lastName.trim()
        }

        // Si le mail et la confirmation sont différents => ERROR
        if(!state.emailSignin === state.emailConfirmSignin) {
            dispatch({
                type: ERROR,
                payload: { error: "Confirmation de votre mail erronée." },
            });

            return;
        }

        // Si le mail n'est pas valide => ERROR
        if(!validator.validate(state.emailSignin)) {
            dispatch({
                type: ERROR,
                payload: { error: "Merci de saisir un mail valide." },
            });

            return;
        }

        if(state.passwordSignin === state.confirmPasswordSignin) {
            if(!isValidPassword(state.passwordSignin)) {
                dispatch({
                    type: ERROR,
                    payload: { error: "Votre mot de passe doit contenir au moins 10 caractères, une majuscule, un caractère spécial et un chiffre." },
                });

                return;
            }
                
            try {

                await api.post("/signin", formData);
                dispatch({
                    type: RESET_ERROR,
                });

            } catch (error) {
                throw new Error (error);
            }

        } else {
            dispatch({
                type: ERROR,
                payload: { error: "Confirmation du mot de passe erronée." },
            });
        }

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
                                name="connect-form"
                                onSubmit={handleLogin}
                                unstackable
                            >
                                <Form.Group
                                    widths={2}
                                >
                                    <Form.Input
                                        type='email'
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
                               {/*  <Form.Checkbox
                                    name="not-a-robot"
                                    label='Je ne suis pas ChatGPT'
                                    required
                                /> */}
                                <Button
                                    type='submit'
                                    negative
                                >
                                    Je me connecte !
                                </Button>
                                {state.error && <p>{state.error}</p>}
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
                                        type='email'
                                        label='Email'
                                        placeholder='Email'
                                        name="emailSignin"
                                        value={state.emailSignin}
                                        onChange={handleChange}
                                        required
                                    />
                                     <Form.Input
                                        type='email'
                                        label='Confirmation de votre email'
                                        placeholder='Confirmation de votre email'
                                        name="emailConfirmSignin"
                                        value={state.emailConfirmSignin}
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
                                   {/*  <Form.Checkbox
                                        label='Je ne suis pas ChatGPT'
                                        required
                                    /> */}
                                    <Button type='submit' negative>Je crée mon compte !</Button>
                                    {state.error && <p>{state.error}</p>}
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
