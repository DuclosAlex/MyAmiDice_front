import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import InviteModal from '../InviteModal/InviteModal'
import LoginSigninModal from '../LoginSigninModal/LoginSigninModal';
import './style.scss';


function Header() {

  const dataStorage = localStorage.getItem('User'); // recupère la donnée lié a la key "User" dans le localStorage en STRING
  const userData = JSON.parse(dataStorage) // reconstruit les données du user en JSON 

  const location = useLocation();
  
  // On vérifie l'url pour savoir sur quelle page l'utilisteur est
  const onProfil = location.pathname.includes("profile");
  const onDemo = location.pathname.includes("demo");
  const onCreateGame = location.pathname.includes("creategame");
  
userData ? console.log("userData début", userData) : console.log("userData undefined")

  let isGameInvite = null
  if(userData){
    isGameInvite = userData.games_invite
    console.log("userData.games_invite[0].pseudo", userData.games_invite[0].pseudo);
    console.log("userData.games[0].name", userData.games_invite[0].name);
  }

  return (
    <header className='header'>
        <div className='header-container'>

          { onProfil? <Button as={NavLink} to="/" >Accueil</Button> : null } {/* Affiche le bouton Accueil lorsque l'utilisateur est sur la page Profil */}
          { onDemo? <Button as={NavLink} to="/" >Accueil</Button> : null } {/* Affiche le bouton Accueil lorsque l'utilisateur est sur la page Demo */}
          { onCreateGame? <Button as={NavLink} to="/" >Accueil</Button> : null } {/* Affiche le bouton Accueil lorsque l'utilisateur est sur la page Création de partie */}
          { isGameInvite? <InviteModal
                        masterName={userData.games_invite[0].pseudo}
                        gameName={userData.games_invite[0].name} />
                        :
                        null }

          <h1 className='header-container-title'>
              MyAmiDice
          </h1>
          { userData? <Button as={NavLink} to="/home/profile">Mon Profil</Button> : null}          
          <LoginSigninModal className='header-container-buttonconnect' negative>Connexion</LoginSigninModal>

        </div>
        
    </header>
  )
}

export default Header