import React from 'react';

import Concept from '../Concept/Concept';
import Header from '../Header/Header';
import News from '../News/News';
import Slideshow from '../Slideshow/Slideshow';
import Footer from '../Footer/Footer';
import CharacterCreationModal from '../CharacterCreationModal/CharacterCreationModal';

function Home() {
  return (
    <div className='home'>
        <Header />
        <Slideshow />
        <CharacterCreationModal />
        <Concept />
        <News />
        <Footer />
    </div>
  )
}

export default Home