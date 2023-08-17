import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import MainPage from './pages/mainPage/MainPage';
import LoginPage from './pages/loginPage/LoginPage';
import ActiveEvent from './components/body/events/activeEvent/ActiveEvent';
import AuthContext, { AuthProvider } from './context/AuthContext';
import Button from './elements/button/Button';
import StartPage from './pages/startPage/StartPage';
import SelectPage from './pages/selectPage/SelectPage';
import ProfilePage from './pages/profilePage/ProfilePage';
import Navbar from './components/navbar/Navbar';
import SearchEvent from './pages/searchEventPage/SearchEvent';
import QuestPage from './pages/questsPage/QuestPage';
import EventsModerator from './pages/eventsModeratorPage/EventsModerator';
import QuestsModerator from './components/body/quests/questsModerator/QuestsModerator';
import AddEventPage from './pages/addEventPage/AddEventPage';
import AddQuestPage from './pages/addQuestPage/AddQuestPage';
import Favourites from './components/body/profile/favourites/Favourites';
import Calendar from './components/body/profile/calendar/Calendar';
import Rating from './components/body/quests/rating/Rating';

function App() {
  return (
    <div className="App">
      
      <Router>
      <Header />
      <Navbar />
        <AuthProvider>
          <Routes>
            <Route path='/' element={<StartPage />} />
            <Route path='/main' element={<MainPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/select' element={<SelectPage />}/>
            <Route path='/profile' element={<ProfilePage />}/>
            <Route path='/events' element={<SearchEvent />} />
            <Route path='/event/:id' element={<ActiveEvent event={{}} />} />
            <Route path='/quests' element={<QuestPage />} />
            <Route path='/events_moderator' element={<EventsModerator />} />
            <Route path='/quests_moderator' element={<QuestsModerator />} />
            <Route path='/add_event' element={<AddEventPage />} />
            <Route path='/add_quest' element={<AddQuestPage />} />
            <Route path='/favourites' element={<Favourites />} />
            <Route path='/calendar' element={<Calendar />} />
            <Route path='/rating' element={<Rating />} />
          </Routes>
        </AuthProvider>

      </Router>
      <Footer />
    </div>
  );
}

export default App;
