import React from 'react';
import Slideshow from '../Slideshow/Slideshow';
import Concept from '../Concept/Concept';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Home() {
  return (
    <div className='home'>
        <Header />
        <Slideshow />
        <Concept />
        <Footer />
    </div>
  )
}

export default Home