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
    <div>
      <h2>Notes:</h2>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <p>Created at: {new Date(note.created_at).toLocaleString()}</p>
            <p>Updated at: {new Date(note.updated_at).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestingApi;
