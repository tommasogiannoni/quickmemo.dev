import React, { useState } from 'react';
import './App.css';
import { Link, useLocation } from 'react-router-dom';
import { FaHome} from 'react-icons/fa';
import { Route, Routes } from 'react-router-dom';
import NewNotePage from './components/NewNotePage';
import AboutMe from './components/About Me';
import Home from './components/Home';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();
  const showHeader = location.pathname === '/about-me' || location.pathname === '/new';

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const theme = {
    backgroundColor: darkMode ? '#2d2d2d' : '#eeeeee',
    color: darkMode ? '#eeeeee' : '#000000',
  };

  return (
    <div>
      {showHeader && (
        <header className="sticky-header" style={{ backgroundColor: theme.backgroundColor, color: theme.color }} >
          <FaHome className="icon"/>
        </header>
      )}
      <div className="App" style={theme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<NewNotePage theme={theme}/>} />
          <Route path="/about-me" element={<AboutMe />} />
        </Routes>
        <footer>
          <nav>
            <ul>
              <li className='footer-item'><Link to="/about-me" style={{ textDecoration: 'none' }}>About me</Link></li>
              <li className="footer-item" onClick={toggleDarkMode}>{darkMode ? 'Light Mode' : 'Dark Mode'}</li>
            </ul>
          </nav>
        </footer>
      </div>
    </div>
  );
}

export default App;