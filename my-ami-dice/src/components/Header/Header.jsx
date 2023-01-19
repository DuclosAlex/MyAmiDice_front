import React from 'react';
import Button from '../App/Button/Button';
import './style.scss';

function Header() {
  return (
    <header className='header'>
        <h1>
            MyAmiDice
        </h1>
        <Button className='button-connection' />
    </header>
  )
}

export default Header