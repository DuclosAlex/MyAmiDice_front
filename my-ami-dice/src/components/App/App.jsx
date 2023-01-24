import { Route, Routes } from 'react-router-dom';
import CreateGame from '../CreateGame/CreateGame';
import Demo from '../Demo/Demo';
import Home from '../Home/Home';
import HomeMember from '../HomeMember/HomeMember';
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
      {/* <Route path="/home/admin/" element={< />} />
      <Route path="/home/gameroom/:id" element={< />} />
      <Route path="*" element={< />} /> */}
    </Routes>
  )
}

export default App
