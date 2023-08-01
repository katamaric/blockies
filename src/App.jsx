import React, { useState, useEffect } from 'react';
import MarkdownInput from './components/MarkdownInput';
import NoteDisplay from './components/NoteDisplay';
import './App.css';

const App = () => {

  // localStorage.clear();

  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState({ title: '', content: '' });


  const saveNote = (note) => {
    const key = `note${notes.length + 1}`;
    localStorage.setItem(key, JSON.stringify(note));
    // Update the notes state to include the new note
    setNotes([...notes, note]);
  };

  const loadNotesFromLocalStorage = () => {
    const storedNotes = [];
    for (let i = 1; i <= localStorage.length; i++) {
      const noteKey = `note${i}`;
      const noteString = localStorage.getItem(noteKey);
      if (noteString) {
        const note = JSON.parse(noteString);
        storedNotes.push(note);
      }
    }
    setNotes(storedNotes);
  };

  useEffect(() => {
    // Load notes from localStorage when the App component mounts
    loadNotesFromLocalStorage();
  }, []);

  return (
    <div className="container">
      <div className="sidebar">
        <ul>
          {notes.map((note, index) => (
            <li key={index} onClick={() => setCurrentNote(note)}>
              {note.title}
              <p>{note.content.slice(0, 20) + '...'}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="main-body">
        <div className="note-view">
          <NoteDisplay note={currentNote} />
        </div>
        <div className="new-note">
          <MarkdownInput onSave={saveNote} />
        </div>
      </div>
    </div>
  );
};

export default App;
