import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CiCirclePlus } from "react-icons/ci";
import '../styles/Home.css'

function Home() {
  const [isTouchActive, setIsTouchActive] = useState(false);

  const handleTouchStart = () => {
    setIsTouchActive(true);
  };

  const handleTouchEnd = () => {
    setIsTouchActive(false);
  };

  return (
    <div className='home-app'>
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
    </div>
  );
}

export default Home;