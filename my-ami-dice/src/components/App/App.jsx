import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import HomeMember from '../HomeMember/HomeMember';
import Profile from '../Profile/Profile'
import './style.scss'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="home/user/" element={<HomeMember />} />
      <Route path="home/profile/" element={<Profile />} />
    </Routes>
  )
}

export default App
