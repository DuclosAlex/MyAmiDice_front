import "./style.scss";
import DiceGenerator from "../DiceGenerator/DiceGenerator";
import Notes from "../Notes/Notes";
import Map from "../Map/Map"
import AvatarContainer from "../AvatarContainer/AvatarContainer";
import ChatRoom from "../ChatRoom/Chatroom";
import { UserContext } from "../../Context/UserContext";

import { socket, SocketContext } from "../../Context/SocketContext";
import CharacterSheet from "../CharacterSheet/CharacterSheet";
import { useContext, useEffect } from "react";


function GameRoom() {

  // Au mount initial, on lance la requête pour récupérer toutes les informations
  useEffect(() => {
    console.log("Rendu initial de la GameRoom")
    
    async function gameData() {
      try {
        console.log("dans le mount de la GameRoom");
        const data = await api.get(`/games/${user_id}/${gameId}`);
        console.log("APRES LA REQUETE data : ", data);
      } catch (error) {
        throw new Error(error);
      }
    };
    gameData();
  }, []);  

  const [user, setUser] = useContext(UserContext);

console.log("user GAMEROOM", user);

  return (
    <SocketContext.Provider value={socket}>
        <div className='GameRoom'>
          <div className="avatar">
            <AvatarContainer />
          </div>
          
          <div className="containerMapNote">
            <Notes />
            <Map />
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
