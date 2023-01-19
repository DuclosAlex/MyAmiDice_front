import React from 'react';
import Carousel from '../Carousel/Carousel';
import Concept from '../Concept/Concept';
import Header from '../Header/Header';

function Home() {
  return (
    <div className='home'>
        <Header />
        <Carousel />
        <Concept />
    </div>
  )
}

export default Home