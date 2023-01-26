import DiceGenerator from "../DiceGenerator/DiceGenerator";
import ContextGameRoom from "../ContextGameRoom/ContextGameRoom";
import ChatRoom from "../ChatRoom/ChatRoom";
import "./style.scss";

function GameRoom() {



  return (
    <ContextGameRoom.Provider value = {5}>
      <div className='GameRoom'>
         <DiceGenerator />
         <ChatRoom />
      </div>
    </ContextGameRoom.Provider>
  )
}

export default GameRoom
