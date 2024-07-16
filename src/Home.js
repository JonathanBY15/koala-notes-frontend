// Home.js

import React from 'react';
import NoteList from './NoteList'; // Assuming NoteItem is in the same directory

const Home = () => {
    return (
        <div className="home">
            <h1>Home Page</h1>
            <NoteList />
        </div>
    );
}

export default Home;
