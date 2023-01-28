import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './style.scss'
import ModifyProfileModal from '../ModifyProfileModal/ModifyProfileModal';

function Profile() {

  const dataStorage = localStorage.getItem('User'); // recupère la donnée lié a la key "User" dans le localStorage en STRING
  const userData = JSON.parse(dataStorage) // reconstruit les données du user en JSON 

  return (
        <>
        <Header />
        <div className='profile-container'>
          <div className='profile'>
            <h1>Mon Profil</h1>
            <div className='profile-pseudo'>
              <p>Pseudo: {userData.pseudo}</p>
            </div>
            <div className='profile-firstName'>
              <p>Prénom: {userData.firstname}</p>
            </div>
            <div className='profile-lastName'>
              <p>Nom: {userData.lastname}</p>
            </div>
            <div className='profile-email'>
              <p>Email: {userData.email} </p>
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
