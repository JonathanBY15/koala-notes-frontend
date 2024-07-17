// EditNotePage.js

import React from 'react';
import NoteEditForm from '../../components/NoteEditForm/NoteEditForm';
import './EditNotePage.css'

const EditNotePage = () => {
    return (
        <div className="edit-note-page">
            <NoteEditForm />
        </div>
    );
}

export default EditNotePage;
