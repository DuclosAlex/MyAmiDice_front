import './style.scss';
import api from "../../api"
import player1IMG from '../../assets/images/joueur1.jpg'
import player2IMG from '../../assets/images/joueur2.jpg'
import player3IMG from '../../assets/images/joueur3.jpg'
import player4IMG from '../../assets/images/joueur4.jpg'
import CharacterSheet from '../CharacterSheet/CharacterSheet';
import { useContext, useState } from 'react';
import { UserContext } from '../../Context/UserContext';



function AvatarContainer() {


const [user, setUser] = useContext(UserContext);
const [characterIdClick, setCharacterIdClick] = useState(null)
const [isClick, setIsClick] = useState(false)
const isMaster = (user.games.pseudo === user.pseudo);


const handleClick = (event) => {
    if(isMaster){
        setCharacterIdClick(event.target.id)
    }
    setIsClick(true)
}

   
  return (
    <div className='avatars-container'>
        <div className='container'>
            {user.allCharacters?.map((character)=>
                (<div className='avatar-player' key={character.id}>
                    <img src={player1IMG} name={character.firstname} id={character.id} alt="Avatar" onClick={handleClick} />
                </div>)
            )}
        </div>
        {isClick? 
        <div className='characterSheet'>
        {isMaster? <CharacterSheet characterId={characterIdClick} /> : <CharacterSheet />} 
        </div>
        : null}
                
    </div>
  )
}



export default AvatarContainer