import React from 'react';
import Concept from '../Concept/Concept';
import Header from '../Header/Header';

function Home() {
  return (
    <div className='home'>
        <Header />
        <div className='carousel'></div>
        <Concept />
    </div>
  )
}

export default Home