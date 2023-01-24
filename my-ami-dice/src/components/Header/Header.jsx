import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import InviteModal from '../InviteModal/InviteModal'
import LoginSigninModal from '../LoginSigninModal/LoginSigninModal';
import './style.scss';


function Header() {
  
  const [isConnect, setIsConnect] = useState(true);
  
  const location = useLocation();
  
  // On vérifie l'url pour savoir sur quelle page l'utilisteur est
  const onProfil = location.pathname.includes("profile");
  const onDemo = location.pathname.includes("demo");
  const onCreateGame = location.pathname.includes("creategame");
  


  return (
    <header className='header'>
        <div className='header-container'>

          { onProfil? <Button as={NavLink} to="/" >Accueil</Button> : null } {/* Affiche le bouton Accueil lorsque l'utilisateur est sur la page Profil */}
          { onDemo? <Button as={NavLink} to="/" >Accueil</Button> : null } {/* Affiche le bouton Accueil lorsque l'utilisateur est sur la page Demo */}
          { onCreateGame? <Button as={NavLink} to="/" >Accueil</Button> : null } {/* Affiche le bouton Accueil lorsque l'utilisateur est sur la page Création de partie */}
          { isConnect? <InviteModal/> : null }
          <h1 className='header-container-title'>
              MyAmiDice
          </h1>
          { isConnect? <Button as={NavLink} to="/home/profile">Mon Profil</Button> : null}          
          <LoginSigninModal className='header-container-buttonconnect' negative>Connexion</LoginSigninModal>

        </div>
        
    </header>
  )
}

export default Header