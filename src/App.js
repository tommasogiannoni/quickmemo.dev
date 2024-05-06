import React, { useState, useEffect } from 'react';
import './App.css';
import { Link, useLocation } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import NotePage from './components/NotePage';
import AboutMe from './components/About Me';
import Home from './components/Home';
import { HomeIcon } from '@heroicons/react/24/outline'


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
    // set also body color
    document.body.style.backgroundColor = newDarkMode ? '#2d2d2d' : '#eeeeee';
    document.body.style.color = newDarkMode ? '#eeeeee' : '#000000';
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

    // body theme update
    document.body.style.backgroundColor = theme.backgroundColor;
    document.body.style.color = theme.color;

  }, [theme.backgroundColor, theme.color]);

  return (
    <div>
      {showHeader && (
        <header className="sticky-header" style={{ backgroundColor: theme.backgroundColor, color: theme.color }} >
          <Link to="/">
            <HomeIcon 
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
    </div>
  );
}

export default App;