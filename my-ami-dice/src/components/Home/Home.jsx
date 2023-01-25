import React from 'react';

import Concept from '../Concept/Concept';
import Header from '../Header/Header';
import Slideshow from '../Slideshow/Slideshow';
import Footer from '../Footer/Footer';
import NewMemberList from '../NewMemberList/NewMemberList';
import ChatRoom from '../ChatRoom/ChatRoom';

function Home() {
  return (
    <div className='home'>
        <Header />
        <Slideshow />
        <ChatRoom />
        <Concept />
        <NewMemberList />
        <Footer />
    </div>
  )
}

export default Home