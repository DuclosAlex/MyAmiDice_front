import Footer from '../Footer/Footer';
import GameList from '../GameList/GameList';
import Header from '../Header/Header';
import NewMemberList from '../NewMemberList/NewMemberList';
import UsersList from '../UsersList/UsersList';
import './style.scss';

function HomeAdmin() {

  return (
    <div className='home-admin'>
        <Header />
        <div className="lists-container">
          <div className="games-users-list">
            <GameList />
            <UsersList />
          </div>
          <div className="admin-news-list">
            <NewMemberList />
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default HomeAdmin