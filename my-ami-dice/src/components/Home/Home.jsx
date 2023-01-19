import React from 'react';
import Slideshow from '../Slideshow/Slideshow';
import Concept from '../Concept/Concept';
import Header from '../Header/Header';

function Home() {
  return (
    <div className='home'>
        <Header />
        <Slideshow />
        <Concept />
    </div>
  )
}

export default Home