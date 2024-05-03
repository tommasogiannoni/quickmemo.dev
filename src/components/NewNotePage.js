import React from 'react';
import '../styles/NewNotePage.css'

function NewNotePage() {
  return (
    <div className='container-small content-new'>
      <h2 className='text-title' >Test Title</h2>
      <div className='note-content'>
        Duis arcu eros, finibus vitae risus et, 
        tincidunt vulputate est. Nunc a dolor at urna 
        consectetur euismod non ac erat. 
        Morbi tempus in ligula quis hendrerit. 
        Etiam vitae magna et dolor condimentum rutrum. 
        Maecenas et finibus dui.
      </div>
    </div>
  );
}

export default NewNotePage;