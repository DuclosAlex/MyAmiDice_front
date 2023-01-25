import { Route, Routes } from 'react-router-dom';
import CreateGame from '../CreateGame/CreateGame';
import Demo from '../Demo/Demo';
import GameRoom from '../GameRoom/GameRoom';
import Home from '../Home/Home';
import HomeMember from '../HomeMember/HomeMember';
import Page404 from '../Page404/Page404';
import Profile from '../Profile/Profile'
import './style.scss'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home/user/" element={<HomeMember />} />
      <Route path="/home/profile/" element={<Profile />} />
      <Route path="/demo/" element={<Demo />} />
      <Route path="/home/creategame/" element={<CreateGame />} />
      <Route path="*" element={<Page404 />} />
      <Route path="/home/gameroom/" element={<GameRoom />} /> 
      {/* <Route path="/home/admin/" element={< />} />*/}
    </Routes>
  )
}

export default App
