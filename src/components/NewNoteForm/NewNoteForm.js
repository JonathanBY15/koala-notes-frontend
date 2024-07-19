import './NewNoteForm.css'

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewNoteForm = ({ onSubmit, initialTitle = '', initialContent = '' }) => {
    const [title, setTitle] = useState(initialTitle);
    const [content, setContent] = useState(initialContent);
    const navigate = useNavigate();

    // function to handle form submission, send post request to add new note
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // const response = await fetch('http://localhost:8000/api/notes', {
            const response = await fetch('http://18.222.134.45/api/notes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, content }),
            });

            if (!response.ok) {
                throw new Error('Failed to add note');
            }

            // Reset form fields after successful submission
            setTitle('');
            setContent('');

            // Redirect to homepage ('/')
            navigate('/');
        } catch (error) {
            console.error('Error adding note:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="note-form">
            <h2>New Note</h2>
            <label htmlFor="title">Title:</label>
            <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />

            <label htmlFor="content">Content:</label>
            <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={5}
                required
            ></textarea>

            <button className="submit-btn" type="submit">Save Note</button>
        </form>
    );
};

export default NewNoteForm;
