import './style.scss';
import api from "../../api"
import player1IMG from '../../assets/images/joueur1.jpg'
import player2IMG from '../../assets/images/joueur2.jpg'
import player3IMG from '../../assets/images/joueur3.jpg'
import player4IMG from '../../assets/images/joueur4.jpg'
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../Context/UserContext';



function AvatarContainer() {
    const [user, setUser] = useContext(UserContext)
    //const characters = user.allCharactersGame
    const masterId = user.currentMasterID
    //const playerId = user.id
    useEffect(()=>{
        
        async function gameData() {
            try {
                console.log("dans le mount de la AvatarContainer");
                const response = await api.get(`/games/${user.currentGameID}/${masterId}`);
                setUser({...user, allCharacters: (response.data.Gameroom.personnages)});
                console.log("APRES LA REQUETE Avatar : ", response.data.Gameroom.personnages);
                
            } catch (error) {
                throw new Error(error);
            }
        };
        gameData();
    },[])
    
    const handleClick = (event) =>{
        const namePlayer = event.target.name
        setNamePlayer(namePlayer)
        
    }

  return (
    <div className='avatars-container'>
        <div className='container'>
          {/*   {characters.map((character)=>{
                <div className='avatar-player'>
                    <img onClick={handleClick} src={player1IMG} name={character.firstname} id={character.id} alt="Avatar" />
                </div>
            })} */}  
        </div>  
    </div>
  )
}



export default AvatarContainer