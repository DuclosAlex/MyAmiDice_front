import { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import InviteModal from '../InviteModal/InviteModal'
import LoginSigninModal from '../LoginSigninModal/LoginSigninModal';
import {UserContext} from '../../Context/UserContext';

import './style.scss';


function Header() {

  const [user, setUser] = useContext(UserContext);
  const areUser = localStorage.getItem("User")

  const location = useLocation();
  
  // On vérifie l'url pour savoir sur quelle page l'utilisteur est
  const onProfil = location.pathname.includes("profile");
  const onDemo = location.pathname.includes("demo");
  const onCreateGame = location.pathname.includes("creategame");
  
user ? console.log("user du HEADER : ", user) : console.log("user HEADER non existant");
//console.log("user.pseudo", user.pseudo);

  let isGameInvite = null
  if(user){
    isGameInvite = user.games_invite
  }

  return (
    <header className='header'>
        <div className='header-container'>
 
          { onProfil? <Button as={NavLink} to="/" >Accueil</Button> : null } {/* Affiche le bouton Accueil lorsque l'utilisateur est sur la page Profil */}
          { onDemo? <Button as={NavLink} to="/" >Accueil</Button> : null } {/* Affiche le bouton Accueil lorsque l'utilisateur est sur la page Demo */}
          { onCreateGame? <Button as={NavLink} to="/" >Accueil</Button> : null } {/* Affiche le bouton Accueil lorsque l'utilisateur est sur la page Création de partie */}
          { isGameInvite? <InviteModal
                        masterName={user.games_invite[0].pseudo}
                        gameName={user.games_invite[0].name} />
                        :
                        null }

          <h1 className='header-container-title'>
              MyAmiDice
          </h1>
          { user? <Button as={NavLink} to="/home/profile">Mon Profil</Button> : null}          
          <LoginSigninModal className='header-container-buttonconnect' negative />

        </div>
        
    </header>
  )
}

export default Header