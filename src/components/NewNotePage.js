import {React, useState } from 'react';
import { FaSave, FaDownload  } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';

import '../styles/NewNotePage.css'

function NewNotePage({ theme, savedNotesList, setSavedNotesList })  {
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

  const saveNotes = () => {
    const newNote = [title, content, new Date().toLocaleDateString()];
    if(title.length > 0 && content.length>0) {

      const newNotesList = [...savedNotesList, newNote];
      setSavedNotesList(newNotesList);
      localStorage.setItem('note_' + uuidv4(), JSON.stringify(newNote));
    }
  }

  return (
    <div className="container">
      <div className='note-card'>
        <div className='note-actions'>
          <FaSave className='save-icon' style={{ color: theme.color }} onClick={saveNotes}/>
          <FaDownload className='download-icon' style={{ color: theme.color }}/>
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