import React, { useEffect, useReducer, useRef, useState } from 'react';
import { Button, Form } from "semantic-ui-react";
import { io } from "socket.io-client";

import "./style.scss";

// Connexion à socket.io côté serveur
const socket = io("http://localhost:3000");

// On écoute l'évènement "connect"
socket.on("connect", () => {
    console.log("Je me connecte");
})

function ChatRoom() {
    

    const [message, setMessage] = useState("");
    const [chatHistory, setChatHistory] = useState([]);
    const [userData, setUserData] = useState(null);
    
    const refMessage = useRef();
    

    // Quand un message est envoyé, on scroll la fenêtre de chat tout en bas
    useEffect(() => {
        if (refMessage.current) {
            const { scrollHeight } = refMessage.current;
            refMessage.current.scrollTo(0, scrollHeight);
        }
    }, [message]);
    
    // Quand un message est ajouté à chatHistory, on l'envoie au serveur socket.io, et on déconnecte
    useEffect(() => {
        
        // On récupère "Users du localStorage
        const dataStorage = localStorage.getItem("User");
        setUserData(JSON.parse(dataStorage));

        // On écoute l'évènement de réception de message "new-message"
        socket.on("new-message", data => {
console.log("on a reçu un message new-message");
            setChatHistory([...chatHistory, data]) //TODO: Se rafraîchit quand chatHistory change, du coup on reçoit 1, puis 2, puis 3....
console.log("chatHistory", chatHistory);
        });
        

        /* return () => {
console.log("deconnexion")
            socket.disconnect(); //FIXME:
        } */
    }, [chatHistory]);

    function handleSubmit(event) {
        event.preventDefault();

        // Si "message" est vide, on ne fait rien
        if(message === "") return;

        setChatHistory([...chatHistory, message]);
console.log("on envoie un message: ", message);
        // On envoie une requête "send-message" au serveur socket.io
        socket.emit("send-message", message);
        setMessage("");
    }
    
  return (
    <>
        <div className="chatroom">
            <ul className="message-container" ref={refMessage}>
                {chatHistory.map((data, index) => (
                    <li key={index}>{userData.pseudo}: {data}</li>
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