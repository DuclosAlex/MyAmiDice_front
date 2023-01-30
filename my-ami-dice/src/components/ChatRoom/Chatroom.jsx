import React, { useContext, useEffect, useRef, useState } from 'react';
import { Button, Form } from "semantic-ui-react";
import ContextGameRoom from '../../Context/GameRoomContext';
import { SocketContext } from '../../Context/SocketContext';

import "./style.scss";


function ChatRoom() {
    // On lie le state de ContextGameRoom au state roomId
    const [roomId, setRoomId] = useContext(ContextGameRoom);

    const masterId = 33; //FIXME: A remplacer par la game.user_id (du mj)
    
    // Connexion à socket.io côté serveur
    const socket = useContext(SocketContext);
    
    // On écoute l'évènement "connect"
    socket.on("connect", () => {
        console.log("Je me connecte avec l'id : ", socket.id);
        // Si je suis le MJ, je stocke mon id socket.io dans le ContextGameRoom
        if (masterId === userData.id) { //TODO: Remplacer gameId par game.user_id
            setRoomId(socket.id);
        }
    })
    
    const [message, setMessage] = useState("");
    const [chatHistory, setChatHistory] = useState([]);
    const [recipientId, setRecipientId] = useState("");
    const [strength, setStrength] = useState(10);


    const refMessage = useRef();

    // On récupère "Users" du localStorage
    const dataStorage = localStorage.getItem("User");
    const userData = JSON.parse(dataStorage);




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
    
    const myPseudo = userData.pseudo;

    //TODO: Un user valide un changement de carac
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
    })

    function handleSubmit(event) {
        event.preventDefault();

        // Si "message" est vide, on ne fait rien
        if(message === "") return;

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
                    <Form.Input
                        id='force'
                        placeholder="Force"
                        type="number"
                        name="strength"
                        value={strength}
                        onChange={event => setStrength(event.target.value)}
                        onClick={handleModification}
                        inline
                    />
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