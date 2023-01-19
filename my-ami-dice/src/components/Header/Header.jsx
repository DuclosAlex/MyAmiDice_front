import React from 'react';
import './style.scss';

function Header() {
  return (
    <header className='header'>
        <h1>
            MyAmiDice
        </h1>
        <button className='button-connection'>Connexion</button>
    </header>
  )
}

export default Header