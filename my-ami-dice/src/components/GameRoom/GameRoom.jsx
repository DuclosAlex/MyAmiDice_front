import DiceGenerator from "../DiceGenerator/DiceGenerator"
import ContextGameRoom from "../ContextGameRoom/ContextGameRoom"

function GameRoom() {



  return (
    <ContextGameRoom.Provider value = {5}>
      <div className='GameRoom'>
         <DiceGenerator />
      </div>
    </ContextGameRoom.Provider>
  )
}

export default GameRoom
