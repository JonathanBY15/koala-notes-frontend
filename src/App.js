// App.js

import './App.css';
import './Navbar.css'
import './NoteForm.css'
import './Footer.css'

import Navbar from './Navbar';
import NoteForm from './NoteForm';
import Footer from './Footer';
import Home from './Home'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const handleNoteSubmit = (note) => {
    console.log('Submitted Note:', note);
    // Implement your logic to save the note (e.g., API call, state update, etc.)
  }

  return (
    <Router>
      <div className="app-container">
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path="/new" element={<NoteForm onSubmit={handleNoteSubmit} />}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
