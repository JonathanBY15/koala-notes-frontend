// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage'
import EditNotePage from './pages/EditNotePage/EditNotePage';
import NoteDetailPage from './pages/NoteDetailPage/NoteDetailPage';
import NewNotePage from './pages/NewNotePage/NewNotePage';


function App() {

  return (
    <Router>
      <div className="app-container">

        <header>
          <Navbar />
        </header>

        <main className="main-content">
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/note/:noteId' element={<NoteDetailPage/>} />
            <Route path='/note/:noteId/edit' element={<EditNotePage/>} />
            <Route path="/new" element={<NewNotePage/>}/>
          </Routes>
        </main>

        <footer className="footer-container">
          <Footer />
        </footer>
      </div>
    </Router>
    
  );
}

export default App;
