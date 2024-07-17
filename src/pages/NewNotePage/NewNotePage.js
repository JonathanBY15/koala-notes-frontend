// NewNotePage.js

import React from 'react';
import NewNoteForm from '../../components/NewNoteForm/NewNoteForm';
import './NewNotePage.css'

const NewNotePage = () => {
    return (
        <div className="new-note-page">
            <NewNoteForm />
        </div>
    );
}

export default NewNotePage;
