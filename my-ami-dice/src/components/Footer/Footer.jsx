import React from 'react';
import logo from '../../assets/images/logoDice.jpg'
import './style.scss';

function Footer() {
  return (
    <div className='footer'>
        <img src={logo} alt="logo-MyAmiDice" />
    </div>
  )
}

export default Footer