// App.js

import './App.css';
import './Navbar.css'
import './NoteForm.css'
import './Footer.css'

import Navbar from './Navbar';
import NoteForm from './NoteForm';
import Footer from './Footer';
import Home from './Home'
import Note from './Note'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="app-container">
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/note/:noteId' element={<Note/>} />
            <Route path="/new" element={<NoteForm/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
