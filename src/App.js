import React, { useState } from 'react';
import { CiCirclePlus } from "react-icons/ci";
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const navigateToNewNote = () => {

  }

  const theme = {
    backgroundColor: darkMode ? '#2d2d2d' : '#eeeeee',
    color: darkMode ? '#eeeeee' : '#000000',
  };

  return (
    <div className="App" style={theme}>
      <div className="content">
        <h1 className="title">Write.<span className='me'>me</span></h1>
        <div>
          <CiCirclePlus className="new-note-button" onClick={navigateToNewNote()}/>
        </div>
      </div>
      <footer>
        <nav>
          <ul>
            <li><a href="#about">About me</a></li>
            <li className="change-theme" onClick={toggleDarkMode}><a href>{darkMode ? 'Light Mode' : 'Dark Mode'}</a></li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}

export default App;