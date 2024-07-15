// NoteList.js

import React from 'react';
import NoteItem from './NoteItem'; // Assuming NoteItem is in the same directory

const NoteList = () => {
    // Dummy data for demonstration
    const notes = [
        { id: 1, title: 'First Note', content: 'This is the content of the first note.', dateCreated: '2024-07-15' },
        { id: 2, title: 'Second Note', content: 'This is the content of the second note.', dateCreated: '2024-07-16' },
        { id: 3, title: 'Third Note', content: 'This is the content of the third note.', dateCreated: '2024-07-17' },
        { id: 4, title: '4th Note', content: 'This is the content of the 4th note.', dateCreated: '2024-07-17' }
    ];

    return (
        <div className="note-list">
            {notes.map(note => (
                <NoteItem
                    key={note.id}
                    title={note.title}
                    content={note.content}
                    dateCreated={note.dateCreated}
                />
            ))}
        </div>
    );
}

export default NoteList;
