import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TrashIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import '../styles/Home.css'

function Home({savedNotesList, setSavedNotesList, theme}) {
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
                      <button className='new-note-button-class'>
                        <PlusCircleIcon 
                          style={{color: theme.color}}
                          className={`new-note-button-2 ${isTouchActive ? 'touch-active' : ''}`}
                          onTouchStart={handleTouchStart}
                          onTouchEnd={handleTouchEnd}
                        />
                      </button>
                    </Link>
                </div>
              </div>
              {savedNotesList.map((note, index) => (
                <div key={index} className="note-item">
                  <Link to={'/new'} state={{ note }}>
                    <div className="note-info">
                      <h2 className='note-title-detail'>{note[1]}</h2>
                      <p className='date-info'>{note[5]}</p>
                    </div>
                  </Link>
                  <button className="delete-button" onClick={() => handleDeleteNote(note[0])}><TrashIcon className='icon-delete'/></button>
                </div>
              ))}
            </div>
          ) 
          : 
          (
            <div className="content-home">
              <h1 className="title">quickmemo.<span className='me'>dev</span></h1>
              <div className='new-note-button-main'>
                <Link to="/new">
                  <PlusCircleIcon 
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