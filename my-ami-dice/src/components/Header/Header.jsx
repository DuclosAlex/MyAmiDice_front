import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import InviteModal from '../InviteModal/InviteModal'
import LoginSigninModal from '../LoginSigninModal/LoginSigninModal';
import './style.scss';


function Header() {
  
  const [isConnect, setIsConnect] = useState(true);
  
  const location = useLocation();
  const onProfil = location.pathname.includes("profile");

  
  



  return (
    <header className='header'>
        <div className='header-container'>

          { onProfil? <Button>Accueil</Button> : null }
          { isConnect? <InviteModal/> : null }
          <h1 className='header-container-title'>
              MyAmiDice
          </h1>
          { isConnect? <Button>Mon Profil</Button> : null}
          <LoginSigninModal className='header-container-buttonconnect' negative>Connexion</LoginSigninModal>
        </div>
        
    </header>
  )
}

export default Header