import {React, useEffect, useState } from 'react';
import { FaSave, /*FaDownload*/  } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';
import { useLocation } from 'react-router-dom';
import '../styles/NotePage.css'


function NotePage({ theme, savedNotesList, setSavedNotesList })  {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const location = useLocation();

  useEffect(() => {
    if (location && location.state) { 
      setTitle(location.state.note[1]);
      setContent(location.state.note[2]);
    }

  }, [location]);

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
    // edit note
    if(location && location.state && location.state.note) {
      if(savedNotesList && savedNotesList.length > 0) {
        const found = savedNotesList.find(elem => elem[0] === location.state.note[0]);
        if(found) {
          const idx = savedNotesList.findIndex( elem => elem[0] === location.state.note[0] );
          savedNotesList[idx][1] = title;
          savedNotesList[idx][2] = content;
          localStorage.setItem(savedNotesList[idx][0], JSON.stringify(savedNotesList[idx]));
        }

        return;
      }
    }

    // new note
    const newNote = ['note_' + uuidv4(), title, content, new Date().toLocaleDateString()];
    if(title.length > 0 && content.length>0) {
      const newNotesList = [...savedNotesList, newNote];
      setSavedNotesList(newNotesList);
      localStorage.setItem(newNote[0], JSON.stringify(newNote));
    }
  }

  const updateTextareaHeight = (element) => {
    element.style.height = 'auto'; // Resetting the height to auto to calculate the scrollHeight
    element.style.height = `${element.scrollHeight}px`; // Setting the height to the scrollHeight
  };

  return (
    <div className="container">
      <div className='note-card'>
        <div className='note-actions'>
          <FaSave className='save-icon' style={{ color: theme.color }} onClick={saveNotes}/>
          {/* <FaDownload className='download-icon' style={{ color: theme.color }}/> */}
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
          style={{ overflowX: 'hidden', overflowY: 'hidden', resize: 'none', minHeight: '50px' }}
          ref={(textarea) => { if (textarea) updateTextareaHeight(textarea); }} // Call updateTextareaHeight initially and whenever content changes
        />
      </div>
        </div>
    </div>
  );
}

export default NotePage;