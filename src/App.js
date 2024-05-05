import React, { useState, useEffect } from 'react';
import './App.css';
import { Link, useLocation } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { Route, Routes } from 'react-router-dom';
import NotePage from './components/NotePage';
import AboutMe from './components/About Me';
import Home from './components/Home';
import { BrowserView, MobileView } from 'react-device-detect';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    return savedDarkMode === 'true';
  });
  const [isTouchActive, setIsTouchActive] = useState(false);
  const [notes, setNotes] = useState([]);
  const location = useLocation();
  const showHeader = location.pathname === '/about-me' || location.pathname === '/new';
  const theme = {
    backgroundColor: darkMode ? '#2d2d2d' : '#eeeeee',
    color: darkMode ? '#eeeeee' : '#000000',
  };

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode);
  };

  const handleTouchStart = () => {
    setIsTouchActive(true);
  };

  const handleTouchEnd = () => {
    setIsTouchActive(false);
  };

  useEffect(() => {
    const savedNotes = [];

    for(let i=0; i<localStorage.length; i++) {
      const key = localStorage.key(i);

      if( key.includes('note_') ) {
        savedNotes.push(JSON.parse( localStorage.getItem(key) ));
      }
    }
    setNotes(savedNotes);
  }, []);

  return (
    <div>
      <BrowserView>
      {showHeader && (
        <header className="sticky-header" style={{ backgroundColor: theme.backgroundColor, color: theme.color }} >
          <Link to="/">
            <FaHome 
              className={`icon ${isTouchActive ? 'touch-active' : ''}`}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            />
          </Link>
        </header>
      )}
      <div className="App" style={theme}>
        <Routes>
          <Route path="/" element={<Home savedNotesList={notes} setSavedNotesList={setNotes}/>} />
          <Route path="/new" element={<NotePage theme={theme} savedNotesList={notes} setSavedNotesList={setNotes}/>} />
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
      </BrowserView>
      <MobileView>
      <div class="mobile-warning">
        Not available yet for mobile
      </div>
      </MobileView>
    </div>
  );
}

export default App;