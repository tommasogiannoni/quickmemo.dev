import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import NewNotePage from './components/NewNotePage';


import './App.css';
import Home from './components/Home';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const theme = {
    backgroundColor: darkMode ? '#2d2d2d' : '#eeeeee',
    color: darkMode ? '#eeeeee' : '#000000',
  };

  return (
    <Router>
      <div className="App" style={theme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<NewNotePage theme={theme}/>} />
        </Routes>
        <footer>
          <nav>
            <ul>
              <li className='footer-item' >About me</li>
              <li className="footer-item" onClick={toggleDarkMode}>{darkMode ? 'Light Mode' : 'Dark Mode'}</li>
            </ul>
          </nav>
        </footer>
      </div>
    </Router>
  );
}

export default App;