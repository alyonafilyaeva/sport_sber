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

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <AuthProvider>
          <Routes>
            <Route path='/' element={<StartPage />} />
            <Route path='/main' element={<MainPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/select' element={<SelectPage />}/>
            <Route path='/profile' element={<ProfilePage />}/>
            <Route path='/event/:id' element={<ActiveEvent event={{}} />} />
            
          </Routes>
        </AuthProvider>

      </Router>
      <Footer />
    </div>
  );
}

export default App;
