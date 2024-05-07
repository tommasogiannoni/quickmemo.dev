import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CiCirclePlus } from "react-icons/ci";
import { TrashIcon } from '@heroicons/react/24/outline'
import '../styles/Home.css'

function Home({savedNotesList, setSavedNotesList}) {
  const [isTouchActive, setIsTouchActive] = useState(false);

  const handleTouchStart = () => {
    setIsTouchActive(true);
  };

  const handleTouchEnd = () => {
    setIsTouchActive(false);
  };

  const handleDeleteNote = (index) => {
    const updatedNotesList = [...savedNotesList];
    const idToRemove = savedNotesList.findIndex( elem => elem[0] === index);
    updatedNotesList.splice(idToRemove, 1);
    setSavedNotesList(updatedNotesList);
    localStorage.removeItem(index);
  };

  return (
    <div className='home-app'>
        {savedNotesList.length > 0 ? 
          (
            <div className="content-list">
              <div className='list-title'>
                <span className='notes-title'>Notes</span>
                <div className='new-note-button-div'>
                  <Link to="/new">
                    <CiCirclePlus 
                      className={`new-note-button ${isTouchActive ? 'touch-active' : ''}`}
                      onTouchStart={handleTouchStart}
                      onTouchEnd={handleTouchEnd}
                    />
                  </Link>
                </div>
              </div>
              {savedNotesList.map((note, index) => (
                <div key={index} className="note-item">
                  <Link to={'/new'} state={{ note }}>
                    <div className="note-info">
                      <h2 className='note-title-detail'>{note[1]}</h2>
                      <p className='date-info'>{note[3]}</p>
                    </div>
                  </Link>
                  <button className="delete-button" onClick={() => handleDeleteNote(note[0])}><TrashIcon className='icon-delete'/></button>
                </div>
              ))}
            </div>
          ) 
          : 
          (
            <div className="content">
              <h1 className="title">QuickMemo.<span className='me'>dev</span></h1>
              <div className='new-note-button-div'>
                <Link to="/new">
                  <CiCirclePlus 
                    className={`new-note-button ${isTouchActive ? 'touch-active' : ''}`}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    onClick={handleTouchEnd}
                  />
                </Link>
              </div>
            </div>
          )}
    </div>
  );
}

export default Home;