import './style.scss';
import player1IMG from '../../assets/images/joueur1.jpg'
import player2IMG from '../../assets/images/joueur2.jpg'
import player3IMG from '../../assets/images/joueur3.jpg'
import player4IMG from '../../assets/images/joueur4.jpg'
import { useState } from 'react';



function AvatarContainer() {

    const [namePlayer, setNamePlayer] = useState('')
    
    const handleClick = (event) =>{
        const namePlayer = event.target.name
        setNamePlayer(namePlayer)
        
    }

  return (
    <div className='avatars-container'>
        <div className='container'>
            <div className='avatar-player'>
                <img onClick={handleClick} src={player1IMG} name="joueur1" alt="Avatar" />
            </div>
            <div className='avatar-player'>
                <img onClick={handleClick} src={player2IMG} name="joueur2" alt="Avatar" />
            </div>
            <div className='avatar-player'>
                <img onClick={handleClick} src={player3IMG} name="joueur3" alt="Avatar" />
            </div>
            <div className='avatar-player'>
                <img onClick={handleClick} src={player4IMG} name="joueur4" alt="Avatar" />
            </div> 
        </div>     
        
        {namePlayer? <div className='character-sheet'>
                <p>Fiche perso du {namePlayer} </p>
        </div>: null}
        


    </div>
  )
}

export default AvatarContainer