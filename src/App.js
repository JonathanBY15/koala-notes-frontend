// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import Navbar from './components/navbar/Navbar';
import NoteForm from './components/note_form/NoteForm';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home'
import Note from './components/note_detail/Note'
import NoteEdit from './components/note_edit/NoteEdit';

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
