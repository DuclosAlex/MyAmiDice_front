import React, { useContext, useEffect, useRef, useState } from 'react';
import { Button, Form } from "semantic-ui-react";
import {UserContext} from '../../Context/UserContext';
import { SocketContext } from '../../Context/SocketContext';

import "./style.scss";


function ChatRoom() {

    const [user, setUser] = useContext(UserContext);
    const chiffre = 3;
    // Connexion à socket.io côté serveur
    const socket = useContext(SocketContext);
    
    // On récupère l'id de la game que je rejoins
    const currentGameId = user.currentGame;
    const myId = user.id;

    // On écoute l'évènement "connect"
    socket.on("connect", () => {
console.log("Connexion chatroom id : ", socket.id);
console.log("Je rejoins la salle : ", currentGameId);

        // On rejoint la salle qui correspond à notre partie
        //socket.emit("join-room", currentGameId);
        
        // Si je suis le MJ, je stocke mon id socket.io dans le ContextGameRoom
        /* if (masterId === myId) { //TODO: Remplacer masterId par game.user_id (retour de la fonction de 105 lignes)
            setMasterSocketId(socket.id);
        } */
    });
    
    const [message, setMessage] = useState("");
    const [chatHistory, setChatHistory] = useState([]);
    const [recipientId, setRecipientId] = useState("");

    const refMessage = useRef();

    // Quand un message est ajouté à chatHistory, on l'envoie au serveur socket.io (et on déconnecte => NON)
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
            socket.removeAllListeners("new-message");
        });
        
console.log("chatHistory", chatHistory);
        /* return () => {
            console.log("deconnexion")
            socket.disconnect(); //FIXME:
        } */
        
    }, [chatHistory]);

    function handleSubmit(event) {
        event.preventDefault();
        
        // Si "message" est vide, on ne fait rien
        if(message === "") return;
        
        const myPseudo = user.pseudo;

        setChatHistory([...chatHistory, {pseudo: myPseudo, message: message}]);
console.log("on envoie un message : ", myPseudo, message);
        // On envoie une requête "send-message" au serveur socket.io
        socket.emit("send-message", {pseudo: myPseudo, message}, recipientId);
        setMessage("");
    }
    
  return (
    <>
        <div className="chatroom">
            <ul className="message-container" ref={refMessage}>
                {chatHistory.map((data, index) => (
                    <li key={index}>{data.pseudo}: {data.message}</li>
                ))}
            </ul>
            <Form id="form" onSubmit={handleSubmit} >
                <Form.Group>
                    {/* <Form.Input
                        id='force'
                        placeholder="Force"
                        type="number"
                        name="strength"
                        value={strength}
                        onChange={event => setStrength(event.target.value)}
                        onClick={handleModification}
                        inline
                    /> */}
                    <Form.Input
                        placeholder="Message"
                        type="text"
                        name="message-input"
                        value={message}
                        onChange={event => setMessage(event.target.value)}
                        inline
                    />
                    <Form.Input
                        placeholder="Destinataire"
                        type="text"
                        name="id-input"
                        value={recipientId}
                        onChange={event => setRecipientId(event.target.value)}
                        inline
                    />
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