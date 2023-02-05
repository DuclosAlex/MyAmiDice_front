import React from 'react';
import logo from '../../assets/images/logoDice.jpg'
import './style.scss';

function Footer() {
  return (
    <div className='footer'>
        <img src={logo} alt="logo-MyAmiDice" />
        <span>© 2023 - MyAmiDice </span>
    </div>
  )
}

export default Footer