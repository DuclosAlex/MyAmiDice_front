import "./style.scss";
import DiceGenerator from "../DiceGenerator/DiceGenerator";
import ContextGameRoom from "../../Context/GameRoomContext";
import Notes from "../Notes/Notes";
import Map from "../Map/Map"
import AvatarContainer from "../AvatarContainer/AvatarContainer";
import ChatRoom from "../ChatRoom/Chatroom";

import { useState } from "react";
import { socket, SocketContext } from "../../Context/SocketContext";
import { useEffect } from "react";


function GameRoom() {

  // Au mount initial, on lance la requête pour récupérer toutes les informations
  useEffect(() => {
    console.log("Rendu initial de la GameRoom")
    
    async function gameData() {
      try {
        console.log("dans le mount de la GameRoom");
        // const data = await api.get(`/games/${user_id}/${gameId}`);
        // console.log("APRES LA REQUETE data : ", data);
      } catch (error) {
        throw new Error(error);
      }
    };
    gameData();
  }, []);


  

  const [dataGameRoomContext, setGameRoomDataContext] = useState(null);
  console.log(dataGameRoomContext)
  return (
    <ContextGameRoom.Provider value = {[dataGameRoomContext, setGameRoomDataContext]}>
      <SocketContext.Provider value={socket}>
        <div className='GameRoom'>
          
          <div className="avatar">
            <AvatarContainer />
          </div>
          
          <div className="containerMapNote">
            <Notes />
            <Map />
          </div>
          
          <div className="containerDiceChat">
            <DiceGenerator />        
            <ChatRoom />
          </div>

        </div>
      </SocketContext.Provider>
    </ContextGameRoom.Provider>
  )
}

export default GameRoom
