// HomePage.js

import React from 'react';
import NoteList from '../../components/NoteList/NoteList';
import './HomePage.css'

const HomePage = () => {
    return (
        <div className="home">
            <NoteList />
        </div>
    );
}

export default HomePage;
