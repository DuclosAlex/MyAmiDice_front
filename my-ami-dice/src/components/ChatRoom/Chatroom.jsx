import React, { useContext, useEffect, useRef, useState } from 'react';
import { Button, Form } from "semantic-ui-react";
import {UserContext} from '../../Context/UserContext';
import { SocketContext } from '../../Context/SocketContext';

import "./style.scss";


function ChatRoom() {
    
    console.log("gameId dans le context" )
    
    const [user, setUser] = useContext(UserContext);
    
    // Connexion à socket.io côté serveur
    const socket = useContext(SocketContext);
    
    // On écoute l'évènement "connect"
    socket.on("connect", () => {
console.log("Connexion chatroom id : ", socket.id);
console.log("Je rejoins la salle : ", 5); //TODO: Remplacer 5 par gameId quand on a l'info
        // On rejoint la salle qui correspond à notre partie
        socket.emit("join-room", 4);// TODO: Remplacer 5 par gameId quand on a l'info
        
        // Si je suis le MJ, je stocke mon id socket.io dans le ContextGameRoom
        /* if (masterId === user.id) { //TODO: Remplacer masterId par game.user_id (retour de la fonction de 105 lignes)
            setMasterSocketId(socket.id);
        } */
    });
    
    const [message, setMessage] = useState("");
    const [chatHistory, setChatHistory] = useState([]);
    const [recipientId, setRecipientId] = useState("");

    const refMessage = useRef();

    // Quand un message est ajouté à chatHistory, on l'envoie au serveur socket.io, et on déconnecte
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
    
    
    /*     //TODO: Un user valide un changement de carac
    function handleModification(event) {
        const data = event.target.name;
        const newValue = event.target.value;
        socket.emit("data-change", {data, newValue}, room); // room = socketId du MJ
    }

    //TODO: On écoute un changement de carac
    socket.on("data-return", ({data, newValue}) => {
        // Impacter le changement sur la fiche perso du mj
        // switchcase data :
        //  case: "strength"
        //  setStrength(value);
        // case: "dexterity"
        // ...
    }) */
    
    function handleSubmit(event) {
        event.preventDefault();
        
        // Si "message" est vide, on ne fait rien
        if(message === "") return;
        
        const myPseudo = user.pseudo;
        const room = recipientId;

        setChatHistory([...chatHistory, {pseudo: myPseudo, message: message}]);
        console.log("on envoie un message: ", myPseudo, message);
        // On envoie une requête "send-message" au serveur socket.io
        socket.emit("send-message", {pseudo: myPseudo, message}, room);
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