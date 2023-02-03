import './style.scss';
import api from "../../api"
import player1IMG from '../../assets/images/joueur1.jpg'
import player2IMG from '../../assets/images/joueur2.jpg'
import player3IMG from '../../assets/images/joueur3.jpg'
import player4IMG from '../../assets/images/joueur4.jpg'
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../Context/UserContext';



function AvatarContainer() {

 const [user, setUser] = useContext(UserContext);

   
  return (
    <div className='avatars-container'>
        <div className='container'>
            {user.allCharacters?.map((character)=>
                (<div className='avatar-player' key={character.id}>
                    <img src={player1IMG} name={character.firstname} id={character.id} alt="Avatar" />
                </div>)
            )}
        </div>  
    </div>
  )
}



export default AvatarContainer