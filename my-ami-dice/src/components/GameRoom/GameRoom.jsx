import DiceGenerator from "../DiceGenerator/DiceGenerator";
import ContextGameRoom from "../ContextGameRoom/ContextGameRoom";
import Map from "../Map/Map"
import Notes from "../Notes/Notes";

import "./style.scss";
import AvatarContainer from "../AvatarContainer/AvatarContainer";
import ChatRoom from "../ChatRoom/Chatroom";



function GameRoom() {



  return (
    <ContextGameRoom.Provider value = {5}>
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
    </ContextGameRoom.Provider>
  )
}

export default GameRoom
