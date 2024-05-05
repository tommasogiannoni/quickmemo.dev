import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CiCirclePlus } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import '../styles/Home.css'

function Home({savedNotesList}) {
  const [isTouchActive, setIsTouchActive] = useState(false);

  const handleTouchStart = () => {
    setIsTouchActive(true);
  };

  const handleTouchEnd = () => {
    setIsTouchActive(false);
  };

  return (
    <div className='home-app'>
        {savedNotesList.length > 0 ? 
          (
            <div className="content-list">
              <div className='list-title'>
                <span className='notes-title'>Notes</span>
                <Link to="/new">
                  <CiCirclePlus 
                    className={`new-note-button ${isTouchActive ? 'touch-active' : ''}`}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                  />
                </Link>
              </div>
              {savedNotesList.map((note, index) => (
                <div key={index} className="note-item">
                  <Link to={'/new'} state={{ note }}>
                    <div className="note-info">
                      <h2 className='note-title-detail'>{note[1]}</h2>
                      <p className='date-info'>{note[3]}</p>
                    </div>
                  </Link>
                  <button className="delete-button"><MdDelete className='icon-delete'/></button>
                </div>
              ))}
            </div>
          ) 
          : 
          (
            <div className="content">
              <h1 className="title">Write.<span className='me'>me</span></h1>
              <div>
                <Link to="/new">
                  <CiCirclePlus 
                    className={`new-note-button ${isTouchActive ? 'touch-active' : ''}`}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                  />
                </Link>
              </div>
            </div>
          )}
    </div>
  );
}

export default Home;