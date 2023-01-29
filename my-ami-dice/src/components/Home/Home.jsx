import React from 'react';

import Concept from '../Concept/Concept';
import Header from '../Header/Header';
import Slideshow from '../Slideshow/Slideshow';
import Footer from '../Footer/Footer';
import NewMemberList from '../NewMemberList/NewMemberList';
import './style.scss';

function Home() {
  
  const userTemoin = {
    id: 33,
    email: "alex@user.com",
    is_admin: false,
    firstname: "swané",
    lastname: "LeBreton",
    pseudo: "Guillaume",
    characters: [
      {
        id: 22,
        lastname: "duclos",
        firstname: "alex"
      }
    ],
    games: [
      {
        name: "first",
        id: 9,
        status: "en cours",
        description: "ceci est une description pour la game dont l'id est 9",
        max_players: 4,
        user_id: 30,
        pseudo: "megaMJ"
      },
      {
        name: "tres",
        id: 11,
        status: "en cours",
        description: "ceci est une description pour la game dont l'id est 11",
        max_players: 4,
        user_id: 32,
        pseudo: "alex"
      }
    ],
    games_invite: [
      {
        name: "deuze",
        id: 10, // invite_id
        description: "ceci est une description pour l'invitation dont l'id est 10",
        pseudo: "userJoueur",
        game_id: 6
      }
    ]
  } 
  localStorage.setItem("User", JSON.stringify(userTemoin));

  return (
    <div className='home'>
        <Header />
        <Slideshow />
        <Concept />
        <NewMemberList />
        <Footer />
    </div>
  )
}

export default Home