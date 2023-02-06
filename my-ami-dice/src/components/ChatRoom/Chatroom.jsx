import React, { useContext, useEffect, useRef, useState } from 'react';
import { Button, Dropdown, Form, Select } from "semantic-ui-react";
import {UserContext} from '../../Context/UserContext';
import { SocketContext } from '../../Context/SocketContext';

import "./style.scss";


function ChatRoom() {

    const [user, setUser] = useContext(UserContext);
    
    const [message, setMessage] = useState("");
    const [chatHistory, setChatHistory] = useState([]);
    const [recipientId, setRecipientId] = useState("Général");
    const [recipientName, setRecipientName] = useState("");
    const [connectedUsers, setConnectedUsers] = useState([]);

    const refMessage = useRef();
    
    // Connexion à socket.io côté serveur
    const socket = useContext(SocketContext);
    
    // On récupère les infos nécessaires
    const currentGameId = user.currentGameID;
    const myId = user.id;
    const masterId = user.currentMasterID;
    let myCharacterName = "";

    // Si je suis MJ, j'ajoute (MJ) à mon pseudo
    if (myId === masterId) {
        myCharacterName = `(MJ) ${user.pseudo}`;
    } else {
        myCharacterName = user.pseudo;
    }
    
    // Au mount initial
    useEffect(()=>{

        // Si je suis MJ, je stocke mon socket.id dans le localStorage pour le diceRoller (dans le useEffect pour éviter infinite loop)
        if (myId === masterId) {
            setUser({...user, currentMasterSocketID: `${socket.id}`});
        }

        // On écoute l'évènement "connect"
        socket.on("connect", () => {
            console.log("Connexion chatroom id : ", socket.id);
            console.log("Je rejoins la salle : ", currentGameId);
            
            // On rejoint la salle qui correspond à notre partie
            socket.emit("join-room", currentGameId, myCharacterName);

            // Ecouteur pour récupérer les utilisateurs connectés en temps réel
            socket.on('connected-users', (users) => {
                // Je supprime mon id du tableau des utilisateurs connectés
                users = users.filter(user => user.value !== socket.id);
                console.log("users après suppression : ", users);
                setConnectedUsers(users);
            });

        });

        // Gestion de déconnexion
        socket.on("disconnect", () => {
            console.log("Déconnexion de la salle : ", currentGameId);
            //socket.emit("leave-room", currentGameId);
        })

        return () => {
            console.log("on vire tout");
            socket.off("connect");
            socket.off("disconnect");
        }
    },[]);

// Si je suis le MJ, je stocke mon id socket.io dans le ContextGameRoom
/* if (masterId === myId) { //TODO: Remplacer masterId par game.user_id (retour de la fonction de 105 lignes)
        setMasterSocketId(socket.id);
    } */
    
    
    // Quand un message est ajouté à chatHistory, on l'envoie au serveur socket.io
    useEffect(() => {        
        
        // Quand chatHistory change, on scroll la fenêtre de chat tout en bas
        if (refMessage.current) {
            const { scrollHeight } = refMessage.current;
            refMessage.current.scrollTo(0, scrollHeight);
        }
        
        // On écoute l'évènement de réception de message "new-message"
        socket.on("new-message", ({pseudo, message}) => {
            console.log("on a reçu un message new-message");
            setChatHistory([...chatHistory, {pseudo, message}]) //TODO: Se rafraîchit quand chatHistory change, du coup on reçoit 1, puis 2, puis 3.... Normal ?
            /* socket.removeAllListeners("new-message"); */
        });

        console.log("chatHistory", chatHistory);
    }, [chatHistory]);

    function handleChangeDropdown(event, data) {
        console.log("handleChangeDropdown : ", event.target.textContent);
        console.log("handleChangeDropdown data : ", data);
        setRecipientId(data.value);
        setRecipientName(event.target.textContent);
    }

    function handleSubmit(event) {
        event.preventDefault();
        
        // Si "message" est vide, on ne fait rien
        if(message === "") return;

        setChatHistory([...chatHistory, {pseudo: myCharacterName, message: message, recipient: recipientName}]);
        console.log(myCharacterName, " envoie un message : ", message, " à : ", recipientName, " qui a l'id : ",recipientId);
        
        // Si on envoie en Général, on change le recipientId avec l'id de la game
        if (recipientId === "Général") {
    console.log("CONSOLE.LOG DANS LE IF")
            socket.emit("send-message", {pseudo: myCharacterName, message}, currentGameId);
        } else {        
        // On envoie une requête "send-message" au serveur socket.io
        socket.emit("send-message", {pseudo: myCharacterName, message}, recipientId);
        setMessage("");
        }
    }
    
  return (
    <>
        <div className="chatroom">
            <ul className="message-container" ref={refMessage}>
                {chatHistory.map((data, index) => (
                    <li key={index}>{data.pseudo} {data.recipient ? ` à ${data.recipient}` : ""}: {data.message}</li>
                ))}
            </ul>
            <Form id="form" onSubmit={handleSubmit} >
                <Form.Group>
                    <Form.Input
                        placeholder="Message"
                        type="text"
                        name="message-input"
                        value={message}
                        onChange={event => setMessage(event.target.value)}
                        inline
                    />
                    <Dropdown
                        fluid
                        selection
                        value={recipientId}
                        onChange={handleChangeDropdown}
                        options={connectedUsers}
                    />
                    {/* <Form.Input
                        placeholder="Destinataire"
                        type="text"
                        name="id-input"
                        value={recipientId}
                        onChange={event => setRecipientId(event.target.value)}
                        inline
                    /> */}
                    <Button
                        type="submit"
                        id="send-button"
                    >Envoyer
                    </Button>
                </Form.Group>
            </Form>
        </div>
    </>
  )
}


export default ChatRoom;