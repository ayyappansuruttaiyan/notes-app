import React, { useState } from "react";

function Notes() {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);
  console.log(notes.length);
  function handleSubmit(e) {
    e.preventDefault();
    const newNote = { id: { title }, title, note };
    if (note !== "") onAddItems(newNote);
    setTitle("");
    setNote("");
  }

  function onAddItems(note) {
    setNotes((notes) => [...notes, note]);
  }

  return (
    <div className="container">
      <form
        onSubmit={handleSubmit}
        className=" container flex bg-white w-[100%] flex-col rounded pl-4"
      >
        <span className="flex justify-between mt-3 text-xl font-semibold">
          <p>Add a note</p>
          <i className="fa-solid fa-xmark cursor-pointer"></i>
        </span>

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
        <div className="flex items-center bg-slate-100 w-max p-2 gap-2 rounded-full my-3">
          <i class="fa-regular fa-clock"></i>
          <p>Today, 10:10 AM</p>
        </div>
        <div className="flex gap-6">
          <i class="fa-solid fa-text-width"></i>
          <i class="fa-solid fa-paintbrush"></i>
          <i class="fa-solid fa-list-ul"></i>
          <i class="fa-solid fa-a"></i>
          <i class="fa-solid fa-align-left"></i>
          <i class="fa-solid fa-rotate-left"></i>
          <i class="fa-solid fa-rotate-right"></i>
        </div>
        <button className="flex bg-slate-400 w-max rounded-full p-2 items-center my-4 font-semibold">
          Add Note
        </button>
      </form>
      {/* start my notes  */}
      {notes.length > 0 && (
        <>
          <span className="flex row my-4">
            <h4 className="text-xl font-medium">
              <i class="fa-solid fa-note-sticky mr-2 text-base"></i>My Notes
            </h4>
            <p className="font-sm my-2">Recently Viewed</p>
          </span>

          <div className="flex flex-row gap-2">
            {notes.map((note) => (
              <div className="basis-1/4 bg-white p-2 box-border  rounded shadow-2xl shadow-black/150">
                <span className="flex justify-between text-xl font-medium">
                  <h2 className="mb-2">{note.title}</h2>
                  <span>
                    <i className="fa-solid fa-pencil mr-3"></i>
                    <i className="fa-solid fa-trash"></i>
                  </span>
                </span>
                <p className="mb-2">{note.note}</p>
                <p>{Date.now()}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {/* <div className="columns-3">
        <div className="basis-1/3 bg-white p-2 box-border  rounded shadow-2xl shadow-black/150">
          <span className="flex justify-between text-xl font-medium">
            <h2 className="mb-2">Feedbacks</h2>
            <span>
              <i className="fa-solid fa-pencil mr-3"></i>
              <i className="fa-solid fa-trash"></i>
            </span>
          </span>
          <p className="mb-2">
            Lorem ipsum dolor sit amet consectetur. Sollicitudin enim risus ut
            vestibulum morbi tellus sit ac. Fames auctor quisque et aliquam
            maecenas sed at vitae facilisis. .
          </p>
          <p>5 days ago</p>
        </div>
        <div className="basis-1/3 bg-white p-2 box-border rounded shadow-2xl shadow-black/150">
          <span className="flex justify-between text-xl font-medium">
            <h2 className="mb-2">Feedbacks</h2>
            <span>
              <i className="fa-solid fa-pencil mr-3"></i>
              <i className="fa-solid fa-trash"></i>
            </span>
          </span>
          <p className="mb-2">
            Lorem ipsum dolor sit amet consectetur. Sollicitudin enim risus ut
            vestibulum morbi tellus sit ac. Fames auctor quisque et aliquam
            maecenas sed at vitae facilisis. .
          </p>
          <p>5 days ago</p>
        </div>
        <div className="basis-1/3 bg-white p-2 box-border rounded shadow-2xl shadow-black/150">
          <span className="flex justify-between text-xl font-medium">
            <h2 className="mb-2">Feedbacks</h2>
            <span>
              <i className="fa-solid fa-pencil mr-3"></i>
              <i className="fa-solid fa-trash"></i>
            </span>
          </span>
          <p className="mb-2">
            Lorem ipsum dolor sit amet consectetur. Sollicitudin enim risus ut
            vestibulum morbi tellus sit ac. Fames auctor quisque et aliquam
            maecenas sed at vitae facilisis. .
          </p>
          <p>5 days ago</p>
        </div>
      </div> */}
      {/* end my notes  */}
      {/* <div>
        <p>My Notes</p>
        <p>Recently viewed</p>
        {notes.map((note) => (
          <>
            <span>
              <span>Edit</span>
              <span>delete</span>
            </span>
            <p>{note.title}</p>
            <p>{note.note}</p>
          </>
        ))}
      </div> */}
    </div>
  );
}

export default Notes;