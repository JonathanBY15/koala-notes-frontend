import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NoteList = () => {
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/notes');
        if (!response.ok) {
          throw new Error('Failed to fetch notes');
        }
        const data = await response.json();
        
        // Sort data based on updated_at in descending order (latest first)
        data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

        // Set the sorted notes array in state
        setNotes(data);
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    };

    fetchNotes();
  }, []);

  const handleNoteClick = (noteId) => {
    navigate(`/note/${noteId}`);
  };

  const renderContentWithLineBreaks = (content) => {
    // Split content into lines based on '\n' and render each line in a <p> tag
    return content.split('\n').map((line, index) => (
      <p key={index}>{line}</p>
    ));
  };

  if (notes.length === 0) {
    return <h1>No notes found.</h1>;
  }

  return (
    <div className="note-list">
      {notes.map((note) => (
        <div key={note.id} className="note-item" onClick={() => handleNoteClick(note.id)}>
          <h3>{note.title}</h3>
          <div className="note-content">
            {renderContentWithLineBreaks(note.content)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
