import DiceGenerator from "../DiceGenerator/DiceGenerator";
import ContextGameRoom from "../ContextGameRoom/ContextGameRoom";
import ChatRoom from "../ChatRoom/ChatRoom";
import Map from "../Map/Map"
import "./style.scss";
import AvatarContainer from "../AvatarContainer/AvatarContainer";

function GameRoom() {



  return (
    <ContextGameRoom.Provider value = {5}>
      <div className='GameRoom'>
        <div className="avatar">
            <AvatarContainer />
        </div>

        <Map />
        <DiceGenerator />
        <ChatRoom />
      </div>
    </ContextGameRoom.Provider>
  )
}

export default GameRoom
