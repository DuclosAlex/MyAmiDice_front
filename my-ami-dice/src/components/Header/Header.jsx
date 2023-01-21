import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';
import InviteModal from '../InviteModal/InviteModal'
import LoginSigninModal from '../LoginSigninModal/LoginSigninModal';
import './style.scss';

function Header() {

  const [isConnect, setIsConnect] = useState(true);

  return (
    <header className='header'>
        <div className='header-container'>

          { isConnect? <InviteModal/> : null }
          <h1 className='header-container-title'>
              MyAmiDice
          </h1>
          <LoginSigninModal className='header-container-buttonconnect' negative>Connexion</LoginSigninModal>
        </div>
        
    </header>
  )
}

export default Header