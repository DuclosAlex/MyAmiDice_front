import React from 'react';
import { Button } from 'semantic-ui-react';
import './style.scss';

function Header() {
  return (
    <header className='header'>
        <div className='header-container'>
          <h1 className='header-container-title'>
              MyAmiDice
          </h1>

          <Button className='header-container-buttonconnect' negative>Connexion</Button>
        </div>
    </header>
  )
}

export default Header