import "./style.scss";
import DiceGenerator from "../DiceGenerator/DiceGenerator";
import ContextGameRoom from "../../Context/GameRoomContext";
import Notes from "../Notes/Notes";
import Map from "../Map/Map"
import AvatarContainer from "../AvatarContainer/AvatarContainer";
import ChatRoom from "../ChatRoom/Chatroom";

import { useState } from "react";
import { socket, SocketContext } from "../../Context/SocketContext";


function GameRoom() {

  const [dataGameRoomContext, setGameRoomDataContext] = useState(null);

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
