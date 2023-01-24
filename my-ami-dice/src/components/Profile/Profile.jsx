import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Button } from 'semantic-ui-react';
import './style.scss'
import ModifyProfileModal from '../ModifyProfileModal/ModifyProfileModal';

const user = {
    pseudo: "Provencal",
    firstName: "Perceval",
    lastName: "DeGalle",
    email: "gercevalDeGalle@chevalier.com"
  }

  




function Profile() {

  return (
        <>
        <Header />
        <div className='profile-container'>
          <div className='profile'>
            <h1>Mon Profil</h1>
            <div className='profile-pseudo'>
              <p>Pseudo: {user.pseudo}</p>
            </div>
            <div className='profile-firstName'>
              <p>Prénom: {user.firstName}</p>
            </div>
            <div className='profile-lastName'>
              <p>Nom: {user.lastName}</p>
            </div>
            <div className='profile-email'>
              <p>Email: {user.email} </p>
            </div>
            <ModifyProfileModal data={"Modifier votre Profil"} />
            <div className='profile-password'>
              <p>Password  </p>
              <ModifyProfileModal data={"Modifier votre Password"} isPassword={true}/>
            </div>
            <div className='profile-delete'>
            <ModifyProfileModal data={"Vous êtes sur de vouloir supprimer votre compte?"} toDelete={true} />
            </div>
          </div>
        </div>
        <Footer />
        </>
  )
}

export default Profile
