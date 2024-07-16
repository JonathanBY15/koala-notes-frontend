// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import Navbar from './Navbar';
import NoteForm from './NoteForm';
import Footer from './Footer';
import Home from './Home'
import Note from './Note'
import NoteEdit from './NoteEdit';

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
            <Route path='/note/:noteId/edit' element={<NoteEdit/>} />
            <Route path="/new" element={<NoteForm/>}/>
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
    
  );
}

export default App;
