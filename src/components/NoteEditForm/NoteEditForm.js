// NoteEdit.js

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './NoteEditForm.css'; // Import CSS file for styling

const NoteEditForm = () => {
  const { noteId } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchNote = async () => {
      try {
        // const response = await fetch(`http://localhost:8000/api/notes/${noteId}`);
        const response = await fetch(`http://18.222.134.45/api/notes/${noteId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch note');
        }
        const data = await response.json();
        setNote(data);
        setTitle(data.title);
        setContent(data.content);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching note:', error);
        setLoading(false);
      }
    };

    fetchNote();
  }, [noteId]);

  const handleSave = async () => {
    try {
      // const response = await fetch(`http://localhost:8000/api/notes/${noteId}`, {
      const response = await fetch(`http://18.222.134.45/api/notes/${noteId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content }),
      });
      if (!response.ok) {
        throw new Error('Failed to update note');
      }
      // Optionally handle success, e.g., show a success message
      navigate(`/note/${noteId}`);
    } catch (error) {
      console.error('Error updating note:', error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!note) {
    return <p>Note not found</p>;
  }

  return (
    <div className="note-edit-container">
      <h2>Edit Note</h2>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <label htmlFor="content">Note:</label>
      <textarea
        id="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={5}
        required
      ></textarea>

      <button className="submit-btn" onClick={handleSave}>Save Changes</button>
    </div>
  );
};

export default NoteEditForm;
