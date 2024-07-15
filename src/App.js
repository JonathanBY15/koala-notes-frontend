import './App.css';
import './Navbar.css'
import './NoteForm.css'
import './Footer.css'

import Navbar from './Navbar';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import Footer from './Footer';

function App() {
  const handleNoteSubmit = (note) => {
    console.log('Submitted Note:', note);
    // Implement your logic to save the note (e.g., API call, state update, etc.)
  }

  return (
    <div className="app-container">
      <header>
        <Navbar />
      </header>
      <main>
        <NoteForm onSubmit={handleNoteSubmit} />
        <h1>Home Page</h1>
        <NoteList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
