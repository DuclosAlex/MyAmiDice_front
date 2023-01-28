import Footer from '../Footer/Footer';
import GameList from '../GameList/GameList';
import Header from '../Header/Header';
import NewMemberList from '../NewMemberList/NewMemberList';
import UsersList from '../UsersList/UsersList';
import './style.scss';

function HomeAdmin() {
  return (
    <div className='home'>
        <Header />
        <GameList />
        <UsersList />
        <NewMemberList />
        <Footer />
    </div>
  )
}

export default HomeAdmin