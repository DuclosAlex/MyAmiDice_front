// Import des différents éléments
import React, { useState, useReducer, useContext } from 'react';
import api from "../../api";
import { Button, Form, Icon, Modal } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import {UserContext} from '../../Context/UserContext';

import './style.scss';

import validator from "email-validator";

function LoginSigninModal() {

    // On récupère la fonction navigate de react-router-dom
    const navigate = useNavigate();

    // On initialise les states d'ouverture / fermeture des deux modales
    const [firstOpen, setFirstOpen] = useState(false);
    const [secondOpen, setSecondOpen] = useState(false);
    
    // On récupère le contexte UserContext
    const [user, setUser] = useContext(UserContext);
    
    // On initialise le state qui sera géré par le reducer
    const initialState = {
        // Partie login
        email: "",
        password: "",

        // Partie signin
        pseudo: "",
        emailSignin: "",
        emailConfirmSignin: "",
        firstName: "",
        lastName: "",
        passwordSignin: "",
        confirmPasswordSignin: "",

        // Message d'erreur
        error: "",
    }

    // A chaque ouverture / fermeture d'une modale, on reset error et les champs du formulaire
    useEffect(() => {
        dispatch({
            type: RESET_ERROR,
        });
        dispatch({
            type: RESET_FORM,
        });

    }, [firstOpen, secondOpen])

    // Actions qui seront utilisées par les dispatch du reducer
    // Sauvegarde de la valeur associée à l'input
    const SAVE_FORM = "SAVE_FORM";
    const actionSaveForm = (name, value) => ({type: SAVE_FORM, payload: {name, value}});

    // Sauvegarde du message d'erreur
    const ERROR = "ERROR";
    const actionError = (error) => ({type: ERROR, payload: {error}}); //TODO: A supprimer si inutile

    // Réinitialisation du message d'erreur
    const RESET_ERROR = "RESET_ERROR";

    // Réinitialisation des champs des formulaires et du message d'erreur
    const RESET_FORM = "RESET_FORM"

    // Reducer qui gère les changements d'initialState suivant l'action spécifiée
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

    // On utilise le hook useReducer pour gérer les changements de initialState
    const [state, dispatch] = useReducer(userReducer, initialState);

    // Gestion du changement des inputs via le dispatch du reducer
    function handleChange(event) {
        dispatch(actionSaveForm(event.target.name, event.target.value));
    }

    // Fonction qui vérifie si le password respecte la regex (au moins 1 majuscule, 1 chiffre, 1 caractère spécial, 10 caractères minimum)
    function isValidPassword(password) {
        let pattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])(?=.{10,})/;
        return pattern.test(password);
      }
    
    // Fonction qui gère le login
    async function handleLogin(event) {
        event.preventDefault();
        let isAdmin = false;
        try {           
            // On récupère les données nécessaires pour la requête
            const formData = {
                email: state.email,
                password: state.password
            }
            // console.log(`api.post("/users/login", formData);`, formData);
            
            // On envoie la requête
            const response = await api.post("/users/login", formData); 
            // console.log("response : ", response);

            // Si la requête est ok, on check si l'utilisateur est admin, on stocke les infos du user dans le userContext, on stocke le token dans le localStorage, on paramètre le header de l'api avec le token et on ferme la première modale
            if (response.status === 200) {
                isAdmin = response.data.user.is_admin;

                const userInfos= response.data.user;
                setUser(userInfos);

                localStorage.setItem("token", response.data.token);

                api.defaults.headers.token = `${response.data.token}`; //TODO: Voir pour remettre le Bearer
                setFirstOpen(false);
            
                // Si la requête n'est pas ok, on affiche un message d'erreur
            } else {
                dispatch(actionError("Email ou mot de passe incorrect."));
            }
            // console.log("USER : ", user);
            
            // On redirige vers la page d'accueil associée
            if(isAdmin) {
                navigate("home/admin");
            } else {
                navigate("home/user");
            }
            
        } catch (error) {
            throw new Error (error);
        }
    }
  
    // Fonction qui gère la déconnexion : suppression du token du localStorage, suppression des infos du userContext et redirection vers la page d'accueil
    function handleLogout() {
        localStorage.removeItem("token");
        setUser(null);
        navigate("/");
    }

    // Fonction qui gère la création de compte
    async function handleSignin(event) {
        event.preventDefault();
        
        // On récupère les données nécessaires pour la requête
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

        // Si le password et la confirmation sont identiques
        if(state.passwordSignin === state.confirmPasswordSignin) {
            // On check si le password est valide
            if(!isValidPassword(state.passwordSignin)) {
                dispatch({
                    type: ERROR,
                    payload: { error: "Votre mot de passe doit contenir au moins 10 caractères, une majuscule, un caractère spécial et un chiffre." },
                });

                return;
            }
                
            // Appel à l'api pour créer le compte, si ok => redirection vers la page d'accueil
            try {

                setSecondOpen(false);
                const data = await api.post("/users/create", formData);
                dispatch({
                    type: RESET_ERROR,
                });

            } catch (error) {
                throw new Error (error);
            }

        // Si le password et la confirmation sont différents => ERROR
        } else {
            dispatch({
                type: ERROR,
                payload: { error: "Confirmation du mot de passe erronée." },
            });
        }

    }

    // Affichage du composant
    return (
        <>
            {/* Si l'utilisateur est connecté, on affiche le bouton "Déconnexion", sinon "Connexion */} 
            {(user !== null) ? (
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
                                <Button
                                    type='submit'
                                    negative
                                >
                                    Je me connecte !
                                </Button>
                                {/* Si il y a une erreur, on l'affiche */}
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

// Export du composant
export default LoginSigninModal;
