import React, { useState } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { TasksContext } from '../context/TasksContext';

function Notes({ onAddNotes, notes, onToggle, isOpen, onDeleteItem }) {
  const { dispatch } = useContext(TasksContext);

  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  let newNotes = notes;
  // const [notes, setNotes] = useState([]);
  // console.log(notes.length);
  function handleSubmit(e) {
    e.preventDefault();
    const newNote = { id: Date.now(), title, note };
    dispatch({ type: 'ADD_TASK', payload: newNote });
    if (note !== '') onAddNotes(newNote);
    axios
      .post('http://localhost:3001/addnotes', { id: Date.now(), title, note })
      .then((note) => console.log(note))
      .catch((err) => console.log(err));
    setTitle('');
    setNote('');
  }

  // function onAddItems(note) {
  //   setNotes((notes) => [...notes, note]);
  // }

  return (
    <div className="container">
      <form
        onSubmit={handleSubmit}
        className=" container flex w-[100%] flex-col rounded bg-white pl-4"
      >
        <span className="mt-3 flex justify-between text-xl font-semibold">
          <p>Add a Note</p>
          <i
            onClick={onToggle}
            className="fa-solid fa-xmark }
            cursor-pointer"
          ></i>
        </span>
        {isOpen && (
          <>
            <input
              type="text"
              value={title}
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              className="my-4 border border-solid border-slate-100 p-2"
            />
            <textarea
              type="textarea"
              placeholder="Take a Note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="border border-solid border-slate-100 p-2"
            />
            <div className="my-3 flex w-max items-center gap-2 rounded-full bg-slate-100 p-2">
              <i className="fa-regular fa-clock"></i>
              <p>Today, 10:10 AM</p>
            </div>
            <div className="flex gap-6">
              <i className="fa-solid fa-text-width cursor-pointer"></i>
              <i className="fa-solid fa-paintbrush cursor-pointer"></i>
              <i className="fa-solid fa-list-ul cursor-pointer"></i>
              <i className="fa-solid fa-a cursor-pointer"></i>
              <i className="fa-solid fa-align-left cursor-pointer"></i>
              <i className="fa-solid fa-rotate-left cursor-pointer"></i>
              <i className="fa-solid fa-rotate-right cursor-pointer"></i>
            </div>
            <button className="justify-content my-4 flex w-max items-center rounded-full bg-slate-200 p-2 font-semibold">
              Add Note
            </button>
          </>
        )}
      </form>
      {/* start my notes  */}
      {notes.length > 0 && (
        <>
          <span className="row my-4 flex">
            <h4 className="text-xl font-medium">
              <i className="fa-solid fa-note-sticky mr-2 text-base"></i>My Notes
            </h4>
            <p className="font-sm my-2">Recently Viewed</p>
          </span>

          <div className="grid grid-cols-3 gap-2">
            {newNotes.map((note) => (
              <div
                key={note.id}
                className="shadow-black/150  box-border basis-1/4 rounded  bg-white p-2 shadow-2xl"
              >
                <span className="flex justify-between text-xl font-medium">
                  <h2 className="mb-2">{note.title}</h2>
                  <span>
                    <i className="fa-solid fa-pencil mr-3 cursor-pointer"></i>
                    <i
                      onClick={() => onDeleteItem(note.id)}
                      className="fa-solid fa-trash cursor-pointer"
                    ></i>
                  </span>
                </span>
                <p className="mb-2">{note.note}</p>
                <p>{Date.now()}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Notes;
