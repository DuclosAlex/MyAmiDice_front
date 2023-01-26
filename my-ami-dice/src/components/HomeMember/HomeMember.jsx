import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CharactersList from '../CharactersList/CharactersList';
import GameList from '../GameList/GameList';
import NewMemberList from '../NewMemberList/NewMemberList';
import './style.scss';

function HomeMember() {
  return (
    <div className='home'>
        <Header />
        <CharactersList />
        <GameList />
        <NewMemberList />
        <Footer />
    </div>
  )
}

export default HomeMember