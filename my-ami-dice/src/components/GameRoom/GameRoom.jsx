import "./style.scss";
import DiceGenerator from "../DiceGenerator/DiceGenerator";
import Notes from "../Notes/Notes";
import Map from "../Map/Map"
import AvatarContainer from "../AvatarContainer/AvatarContainer";
import ChatRoom from "../ChatRoom/Chatroom";
import { UserContext } from "../../Context/UserContext";

import { socket, SocketContext } from "../../Context/SocketContext";
import { useContext, useEffect } from "react";
import api from '../../api';
import InviteGameButton from "../InviteGameButton/InviteGameButton";


function GameRoom() {

  const [user, setUser] = useContext(UserContext);
  const masterId = user.currentMasterID

  // Au mount initial, on lance la requête pour récupérer toutes les informations
  useEffect(() => {

    async function gameData() {
      try {
        console.log("dans le mount de la GameRoom");

        const [{data: game}, {data: characters}] = await Promise.all([
          api.get(`/games/${user.currentGameID}/${user.id}`),
          api.get(`/games/${user.currentGameID}/${masterId}`)
        ])
        
        setUser((user) => ({
          ...user, 
          allCharacters: characters.Gameroom.personnages,
          currentGameData: game
        }));

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
          
            <InviteGameButton />
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
  )
}

export default GameRoom
