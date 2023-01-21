import React from 'react';

import Concept from '../Concept/Concept';
import Header from '../Header/Header';
import Slideshow from '../Slideshow/Slideshow';
import Footer from '../Footer/Footer';
import CharacterCreationModal from '../CharacterCreationModal/CharacterCreationModal';
import NewMemberList from '../NewMemberList/NewMemberList';

function Home() {
  return (
    <div className='home'>
        <Header />
        <Slideshow />
        <CharacterCreationModal />
        <Concept />
        <NewMemberList />
        <Footer />
    </div>
  )
}

export default Home