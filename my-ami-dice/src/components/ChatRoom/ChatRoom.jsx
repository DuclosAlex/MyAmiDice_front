import { io } from "socket.io-client";

import React, { useState } from 'react';
import { Button, Form, TextArea } from "semantic-ui-react";
import "./style.scss";

function ChatRoom() {
/*
DEBUT SOCKET.IO
*/
    
    // Connexion à socket.io côté serveur
    const socket = io("http://localhost:3000"); //TODO: régler les cors
    
    // On écoute l'évènement "connect"
    socket.on("connect", () => {
        console.log("Je me connecte");
    })
 
     // On écoute l'évènement "receive-message"
    socket.on("receive-message", message => {
        displayMessage(message);
    })

/*
FIN SOCKET.IO
*/
    
    const [message, setMessage] = useState("");
    const [room, setRoom] = useState("");
    const [chatMessages, setChatMessages] = useState([]);
    
    // Mise à jour du state quand on écrit dans l'input correspondant
    function handleChangeMessage(event) {
        setMessage(event.target.value)
    }
    
    function handleChangeRoom(event) {
        setRoom(event.target.value)
    }
    // Déjà géré par le state par le handleChangeRoom
    /*    function handleClick(event) {
    console.log("room : ",room);
} */

function handleSubmit(event) {
    event.preventDefault();
        
    // Si "message" est vide, on ne fait rien
    if(message === "") return;
    
    displayMessage(message);
    
    // On envoie l'évènement "send-message" au serveur avec "message" dans la room "room"
    socket.emit("send-message", message, room) //TODO:
    
    setMessage("");    
}

function displayMessage(message) {
        setChatMessages(prevState => ([
            ...prevState,
            message
        ]))
    }

  return (
    <>
        <div className="chatroom">
            <ul className="message-container" >
                {chatMessages.map((chatMessage) => (
                    <li>Joueur 1 : {chatMessage}</li>
                ))}
            </ul>
            <Form id="form" onSubmit={handleSubmit} >
                <Form.Group>
                    <Form.Input
                        placeholder="Message"
                        type="text"
                        name="message-input"
                        value={message}
                        onChange={handleChangeMessage}
                        inline
                    />
                    <Button
                        type="submit"
                        id="send-button"
                    >Envoyer
                    </Button>
                    <Form.Input
                        placeholder="Salon"
                        type="text"
                        name="room-input"
                        value={room}
                        onChange={handleChangeRoom}
                        inline
                    >
                    </Form.Input>
                    <Button
                        type="button"
                        id="room-button"
                        //onClick={handleClick}
                    >Rejoindre
                    </Button>
                </Form.Group>
            </Form>
        </div>
    </>
  )
}

export default ChatRoom