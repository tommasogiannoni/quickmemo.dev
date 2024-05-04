import {React, useState } from 'react';
import { FaSave } from "react-icons/fa";
import '../styles/NewNotePage.css'

function NewNotePage({ theme })  {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  
  const handleTitleChange = (event) => {
    if (event.target.value.length <= 42) {
      setTitle(event.target.value);
    }
  };
  
  const handleContentChange = (event) => {
    if (event.target.value.length <= 5000) {
      setContent(event.target.value);
    }
  };

  return (
    <div className="container">
      <div className='container-small content-new note-card'>
        <div className='note-actions'>
          <FaSave className='save-icon' style={{ color: theme.color }}/>
        </div>
        <div>
          <input 
            type="text" 
            className="note-title-input" 
            placeholder="Title" 
            value={title} 
            onChange={handleTitleChange} 
          />
        <textarea 
          className="note-content-input" 
          placeholder="Write me" 
          value={content} 
          onChange={handleContentChange}
          style={{ color: theme.color }} 
        />
      </div>
        </div>
    </div>
  );
}

export default NewNotePage;