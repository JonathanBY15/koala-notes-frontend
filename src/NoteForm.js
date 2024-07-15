// NoteForm.js

import React, { useState } from 'react';

const NoteForm = ({ onSubmit, initialTitle = '', initialContent = '' }) => {
    const [title, setTitle] = useState(initialTitle);
    const [content, setContent] = useState(initialContent);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, content });
        // Reset form fields after submission
        setTitle('');
        setContent('');
    }

    return (
        <form onSubmit={handleSubmit} className="note-form">
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

            <button type="submit">Save Note</button>
        </form>
    );
}

export default NoteForm;
