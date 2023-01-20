import React from 'react';
import { Button } from 'semantic-ui-react';
import Concept from '../Concept/Concept';
import Header from '../Header/Header';
import News from '../News/News';

function Home() {
  return (
    <div className='home'>
        <Header />
        <Concept />
        <News />
    </div>
  )
}

export default Home