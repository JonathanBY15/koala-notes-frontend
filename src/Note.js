// Note.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Note = () => {
    const { noteId } = useParams();
    const [note, setNote] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNote = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/notes/${noteId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch note');
                }
                const data = await response.json();
                setNote(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching note:', error);
                setLoading(false);
            }
        };

        fetchNote();
    }, [noteId]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!note) {
        return <p>Note not found</p>;
    }

    return (
        <div>
            <h2>Note Details</h2>
            <p>Title: {note.title}</p>
            <p>Content: {note.content}</p>
            <p>Created at: {new Date(note.created_at).toLocaleString()}</p>
            <p>Updated at: {new Date(note.updated_at).toLocaleString()}</p>
        </div>
    );
};

export default Note;
