import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Button } from 'semantic-ui-react';
import './style.scss'

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
            <div className='profile--pseudo'>
              <p>Pseudo: {user.pseudo}</p>
              <Button>Modifier</Button>              
            </div>
            <div className='profile--firstName'>
              <p>Prénom: {user.firstName}</p>              
            </div>
            <div className='profile--pseudo'>
              <p>Nom: {user.lastName}</p>
            </div>
            <div className='profile--pseudo'>
              <p>Email: {user.email} </p>
            </div>
            <div className='profile-buttons'>
              <Button>Modifier</Button>  {/*faire la gestion des modales pour modifier le profil un boutton modifier par elememt et un modale par button*/}
              <Button>Supprimer</Button>              
            </div>
          </div>
        </div>
        <Footer />
        </>
  )
}

export default Profile
