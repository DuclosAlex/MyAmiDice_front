import React from 'react';
/* import { Button } from 'semantic-ui-react'; */
import LoginSigninModal from '../LoginSigninModal/LoginSigninModal';

import './style.scss';

function Header() {
  return (
    <header className='header'>
        <div className='header-container'>
          <div>
            <h1 className='header-container-title'>
              MyAmiDice
            </h1>
          </div>

          <LoginSigninModal />
        </div>
    </header>
  )
}

export default Header