import React, { useState } from 'react';

const MarkdownInput = ({ onSave }) => {
  const [note, setNote] = useState({ title: '', content: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNote((prevNote) => ({ ...prevNote, [name]: value }));
  };

  const handleSave = () => {
    onSave(note);
    setNote({ title: '', content: '' });
  };

  return (
    <div>
      <input
        type="text"
        name="title"
        value={note.title}
        onChange={handleInputChange}
        placeholder="Note Title"
      />
      <textarea
        name="content"
        value={note.content}
        onChange={handleInputChange}
        rows="10"
        cols="50"
        placeholder="Write your note here..."
      ></textarea>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default MarkdownInput;
