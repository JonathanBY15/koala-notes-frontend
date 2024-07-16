// TestingApi.js

import React, { useState, useEffect } from 'react';

const TestingApi = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/notes');
        if (!response.ok) {
          throw new Error('Failed to fetch notes');
        }
        const data = await response.json();
        setNotes(data); // Assuming data is an array of notes objects
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    };

    fetchNotes();
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div className="note-list">
      {notes.map((note) => (
        <div key={note.id} className="note-item">
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <p><b>Created at:</b> {new Date(note.created_at).toLocaleString()}</p>
          <p><b>Last Updated at:</b> {new Date(note.updated_at).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default TestingApi;
