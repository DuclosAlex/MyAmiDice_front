import React, { useState, useReducer, useContext } from 'react';
import api from "../../api";
import { Button, Form, Icon, Modal } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import {UserContext} from '../../Context/UserContext';

import './style.scss';

import validator from "email-validator";

function LoginSigninModal() {

    const navigate = useNavigate();

    const [firstOpen, setFirstOpen] = useState(false);
    const [secondOpen, setSecondOpen] = useState(false);
    
    const [user, setUser] = useContext(UserContext);
    

    const initialState = {
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

    const ERROR = "ERROR";
    const actionError = (error) => ({type: ERROR, payload: {error}}); //TODO: A supprimer si inutile

    const RESET_ERROR = "RESET_ERROR";

    const RESET_FORM = "RESET_FORM"

    function userReducer(state, action) {
        switch (action.type) {
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

            const formData = {
                email: state.email,
                password: state.password
            }
console.log(`api.post("/users/login", formData);`, formData);
            const response = await api.post("/users/login", formData); 
console.log("response : ", response);

            if (response.status === 200) {
                
                const userInfos= response.data.user;
                setUser(userInfos);

                // On stocke le token dans le localStorage
                localStorage.setItem("token", response.data.token);
                console.log("token : ", response.data.token);
                api.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
                setFirstOpen(false);
            } else {
                console.log("dispatch error");
                dispatch(actionError("Email ou mot de passe incorrect."));
            }

            navigate("home/user");
        } catch (error) {
            throw new Error (error);
        }
    }
  
    function handleLogout() {
        console.log("dispatch LOGOUT");
        localStorage.removeItem("token");
        console.log("context", user);
        setUser(null); //TODO: user null
        navigate("/");
    }

    async function handleSignin(event) {
        event.preventDefault();
        
        const formData = {
            pseudo: state.pseudo.trim(),
            email: state.emailSignin.trim(),
            password: state.passwordSignin,
            firstname: state.firstName.trim(),
            lastname: state.lastName.trim()
        }

        // Si le mail et la confirmation sont différents => ERROR
        if(state.emailSignin !== state.emailConfirmSignin) {
            console.log("ERREUR mail différents");
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

                setSecondOpen(false);
                const data = await api.post("/users/create", formData);
                dispatch({
                    type: RESET_ERROR,
                });

            } catch (error) {
                //TODO:
                {/*dispatch({   // l'erreur sera a adapter pour soit le pseudo soit pour l'email en fonction de la syntaxer de l'erreur
                    type: ERROR,
                    payload: { error: "Votre pseudo est déja utilisé. Veuillez en choisir un autre" },
                });*/} 
                throw new Error (error)
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
            {(user !== null) ? ( // pas touche c'est normal je t'explique demain :P
                <Button onClick={handleLogout} negative>Déconnexion</Button>
            ) : ( 
                <>
                    <Button onClick={() => setFirstOpen(true)} negative>Connexion</Button>

                    {/* 1ère modale (connexion) */}
                    <Modal
                        className='login-modal'
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
                        <Modal className='signin-modal'
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
                                        required
                                    />
                                    <Form.Input
                                        label='Nom'
                                        placeholder='Nom'
                                        name="lastName"
                                        value={state.lastName}
                                        onChange={handleChange}
                                        required
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
