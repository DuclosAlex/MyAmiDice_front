import { Route, Routes } from 'react-router-dom';
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
      {/* <Route path="/home/admin/" element={< />} />
      <Route path="/demo/" element={< />} />
      <Route path="/home/creategame/" element={< />} />
      <Route path="/home/gameroom/:id" element={< />} />
      <Route path="*" element={< />} /> */}
    </Routes>
  )
}

export default App
