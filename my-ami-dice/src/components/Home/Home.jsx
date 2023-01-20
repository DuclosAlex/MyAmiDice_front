import React from 'react';

import Concept from '../Concept/Concept';
import Header from '../Header/Header';
import News from '../News/News';
import Slideshow from '../Slideshow/Slideshow';
import Footer from '../Footer/Footer';

function Home() {
  return (
    <div className='home'>
        <Header />
        <Slideshow />
        <Concept />
        <News />
        <Footer />
    </div>
  )
}

export default Home