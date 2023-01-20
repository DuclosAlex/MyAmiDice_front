import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';
import InviteModal from '../InviteModal/InviteModal'
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
          <Button className='header-container-buttonconnect' negative>Connexion</Button>
        </div>
        
    </header>
  )
}

export default Header