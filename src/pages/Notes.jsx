import React, { useState } from "react";

function Notes() {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const newNote = { title, note };
    onAddItems(newNote);
    setTitle("");
    setNote("");
  }

  function onAddItems(note) {
    setNotes((notes) => [...notes, note]);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>Add a note</p>
      <input
        type="text"
        placeholder="title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        type="textarea"
        placeholder="take a note"
        onChange={(e) => setNote(e.target.value)}
      />
      <button>Add Note</button>
      <div>
        <p>My Notes</p>
        <p>Recently viewed</p>
        {notes.map((note) => (
          <>
            <p>{note.title}</p>
            <p>{note.note}</p>
          </>
        ))}
      </div>
    </form>
  );
}

export default Notes;
