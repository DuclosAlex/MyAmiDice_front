import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Button } from 'semantic-ui-react';
import api from '../../api';
import GameModal from '../GameModal/GameModal';
import './style.scss';



//TODO: recup du users.games dans le localStorage/context

function GameList() {

  const [allGamesAdmin, setAllGamesAdmin] = useState(null);

  const dataStorage = localStorage.getItem('User'); // recupère la donnée lié a la key "User" dans le localStorage en STRING
  const userData = JSON.parse(dataStorage)   // reconstruit les données du user en JSON

  let isAdmin = ""
  let allGamesPlayer=[]
  if (userData){
    allGamesPlayer = userData.games
    isAdmin = userData.is_admin
  }

  useEffect(() => {
    async function getAllGame(){
      try {
        const response = await api.get("/games/getall");
        setAllGamesAdmin(response.data);
      } catch (error) {
        throw new Error (error)
      }
    }
    getAllGame()
  }, [])

  return (
    <div className='game-container'>

      {isAdmin? 
          //TODO: checker ce que l'on donne a l'admin pour la liste des partie qu'est ce qui lui est necessaire (voir avec guillaume)
        <div className='gameList'>        
            {allGamesAdmin.map((game) => (
              <GameModal
                key = {game.id}
                name = {game.name}
                id = {game.id}
                masterId = {game.user_id}
                status = {game.status}
              />
            ))}
        </div>

        :
        <>
        {allGamesPlayer? 
        <div className='gameList'>        
            {allGamesPlayer.map((game) => (
              <GameModal
                key = {game.id}
                name = {game.name}
                id = {game.id}
                masterName = {game.pseudo}
                status = {game.status}
                description = {game.description}
                nbPlayer = {game.max_players}
              />
            ))}
        </div>
        :
        null }
        
        <Button as={NavLink} to="/home/creategame">Créer une partie</Button>
        </>
        }
    </div>
  )
}
 



export default GameList