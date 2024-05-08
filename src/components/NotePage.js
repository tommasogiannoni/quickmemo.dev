import {React, useEffect, useState,useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useLocation } from 'react-router-dom';
import { Save } from 'lucide-react';
import '../styles/NotePage.css'

function NotePage({ theme, savedNotesList, setSavedNotesList })  {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const location = useLocation();
  const titleTextareaRef = useRef(null);
  const contentTextareaRef = useRef(null);

  useEffect(() => {
    // edit mode note data
    if (location && location.state && location.state.note) {
      const noteId = location.state.note[0];
      const storedNote = localStorage.getItem(noteId);
      if (storedNote) {
        const parsedNote = JSON.parse(storedNote);
        setTitle(parsedNote[1]);
        setContent(parsedNote[2]);
      }
    }
    // Ripristina i valori del localStorage se esistono
    const savedTextareaHeight = localStorage.getItem('textareaHeight');
    if (savedTextareaHeight && titleTextareaRef.current) {
      titleTextareaRef.current.style.height = savedTextareaHeight;
      contentTextareaRef.current.style.height = savedTextareaHeight;
    }

    // Aggiorna l'altezza della textarea solo se esiste un riferimento valido
    if (titleTextareaRef.current && contentTextareaRef.current) {
      updateTextareaHeight(titleTextareaRef.current);
      updateTextareaHeight(contentTextareaRef.current);
    }


  }, [location]);

  const updateTextareaHeight = (element) => {
    element.style.height = 'auto'; // Resetting the height to auto to calculate the scrollHeight
    element.style.height = `${element.scrollHeight}px`; // Setting the height to the scrollHeight
  };

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

  const savedEffectAlert = () => {
    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
    }, 2000);
  }

  const clickOnSaveEffect = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 400);
  }

  const saveNotes = () => {
    // show effect
    clickOnSaveEffect();
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
        savedEffectAlert();
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
    savedEffectAlert();
  }


  return (
    <div className="container">
      <div className='note-card'>
        <div className='note-actions'>
          <button disabled={title.length === 0 || content.length === 0} 
            className={`save-button ${isClicked ? 'clicked' : ''}`} 
              style={{ color: theme.color }} 
              onClick={saveNotes}>
            <Save className='save-icon'/>
          </button>
        </div>
        {isSaved && <div className="alert">Saved!</div>}
        <div>
          <div className='input-field'>
            <textarea 
              type="text" 
              className="note-title-input" 
              placeholder="Title" 
              value={title} 
              onChange={handleTitleChange} 
              ref={(textarea) => { if (textarea) updateTextareaHeight(textarea); }}
            />
          </div>
          <div className='textarea-field'>
            <textarea 
              className="note-content-input" 
              placeholder="Write me" 
              value={content} 
              onChange={handleContentChange}
              style={{ color: theme.color}}
              ref={(textarea) => { if (textarea) updateTextareaHeight(textarea); }} // Call updateTextareaHeight initially and whenever content changes
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotePage;