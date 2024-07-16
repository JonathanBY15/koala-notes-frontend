// // Note.js

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// const Note = () => {
//     const { noteId } = useParams();
//     const [note, setNote] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchNote = async () => {
//             try {
//                 const response = await fetch(`http://localhost:8000/api/notes/${noteId}`);
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch note');
//                 }
//                 const data = await response.json();
//                 setNote(data);
//                 setLoading(false);
//             } catch (error) {
//                 console.error('Error fetching note:', error);
//                 setLoading(false);
//             }
//         };

//         fetchNote();
//     }, [noteId]);

//     if (loading) {
//         return <p>Loading...</p>;
//     }

//     if (!note) {
//         return <p>Note not found</p>;
//     }

//     return (
//         <div>
//             <h2>Note Details</h2>
//             <p>Title: {note.title}</p>
//             <p>Content: {note.content}</p>
//             <p>Created at: {new Date(note.created_at).toLocaleString()}</p>
//             <p>Updated at: {new Date(note.updated_at).toLocaleString()}</p>
//             <button>Delete</button>
//         </div>
//     );
// };

// export default Note;



// Note.js

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Note = () => {
    const { noteId } = useParams();
    const navigate = useNavigate();
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

    const handleDeleteClick = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/notes/${noteId}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error('Failed to delete note');
            }
            // Redirect to the homepage or another appropriate page after deletion
            navigate('/');
        } catch (error) {
            console.error('Error deleting note:', error);
        }
    };

    const handleEditClick = () => {
        navigate(`/note/${noteId}/edit`);
      };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!note) {
        return <p>Note not found</p>;
    }

    return (
        <div>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <p>Created at: {new Date(note.created_at).toLocaleString()}</p>
            <p>Updated at: {new Date(note.updated_at).toLocaleString()}</p>
            <button id="delete-btn" onClick={handleDeleteClick}>Delete</button>
            <button id="edit-btn" onClick={handleEditClick}>Edit</button>
        </div>
    );
};

export default Note;
