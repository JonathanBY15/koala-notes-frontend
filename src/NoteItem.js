// NoteItem.js

import React from 'react';

const NoteItem = ({ title, content, dateCreated }) => {
    return (
        <div className="note-item">
            <h3>{title}</h3>
            <p>{content}</p>
            <p>Date Created: {dateCreated}</p>
        </div>
    );
}

export default NoteItem;
