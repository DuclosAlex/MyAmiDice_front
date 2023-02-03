import "./style.scss";
import DiceGenerator from "../DiceGenerator/DiceGenerator";
import Notes from "../Notes/Notes";
import Map from "../Map/Map"
import AvatarContainer from "../AvatarContainer/AvatarContainer";
import ChatRoom from "../ChatRoom/Chatroom";
import { UserContext } from "../../Context/UserContext";

import { socket, SocketContext } from "../../Context/SocketContext";
import CharacterSheet from "../CharacterSheet/CharacterSheet";
import { useContext, useEffect, useState } from "react";
import api from '../../api'


function GameRoom() {

  const [user, setUser] = useContext(UserContext);
  // Au mount initial, on lance la requête pour récupérer toutes les informations
  useEffect(() => {
    
    async function gameData() {
      try {
        //console.log("AVANT LA REQUETE Gameroom");
        const game = await api.get(`/games/${user.currentGameID}/${user.id}`);
        setUser({...user, currentGameData: (game.data)});
        //console.log("APRES LA REQUETE data : ", game);
      } catch (error) {
          throw new Error(error);
      }
    };
    gameData();
  }, []);  


//console.log("user GAMEROOM", user);

  return (
    <SocketContext.Provider value={socket}>
        <div className='GameRoom'>
          <div className="avatar">
            <AvatarContainer />
          </div>
          
          <div className="containerMapNote">
            <Notes />
            <Map />
            {user.id}
            <CharacterSheet /* TODO: conditions si c'est le joueur ça s'affiche en dur sinon hidden pour garder la place occuper*/ /> 
          </div>
          
          <div className="containerDiceChat">
            <DiceGenerator />        
            <ChatRoom />
          </div>

        </div>
      </SocketContext.Provider>
  )
}

export default GameRoom
