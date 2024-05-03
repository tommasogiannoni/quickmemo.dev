import {React, useState } from 'react';
import '../styles/NewNotePage.css'

function NewNotePage()  {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  
  const handleTitleChange = (event) => {
    if (event.target.value.length <= 50) {
      setTitle(event.target.value);
    }
  };
  
  const handleContentChange = (event) => {
    if (event.target.value.length <= 200) {
      setContent(event.target.value);
    }
  };

  return (
    <div className='container'>
      <div className='container-small content-new note-card'>
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
        />
      </div>
    </div>
  );
}

export default NewNotePage;