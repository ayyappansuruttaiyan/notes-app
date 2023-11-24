import React from "react";

function Home({ notes, tasks, onDeleteItems }) {
  let newNotes = notes;
  console.log(notes.length);
  return (
    <div className="container bg-violet">
      {/* start my notes  */}
      <h1 className="text-xl my-3 font-medium">Welcome John</h1>
      <span className="flex row my-4">
        <h4 className="text-xl font-medium">
          <i className="fa-solid fa-note-sticky mr-2 text-base"></i>My Notes
        </h4>
        {!notes.length === 0 ? (
          <p className="font-sm my-2">Recently Viewed</p>
        ) : (
          <p className="font-sm my-2">You have empty notes</p>
        )}
      </span>
      <div className="grid grid-cols-3 gap-2">
        {newNotes.map((note) => (
          <div
            key={note.id}
            className="basis-1/4  bg-white p-2 box-border  rounded shadow-2xl shadow-black/150"
          >
            <span className="flex justify-between text-xl font-medium">
              <h2 className="mb-2">{note.title}</h2>
              <span>
                <i className="fa-solid fa-pencil mr-3 cursor-pointer"></i>
                <i className="fa-solid fa-trash cursor-pointer"></i>
              </span>
            </span>
            <p className="mb-2">{note.note}</p>
            <p>{Date.now()}</p>
          </div>
        ))}
      </div>

      {/* end my notes  */}

      {/* start my task */}
      {/* <h1 className="text-xl my-3 font-medium">Welcome John</h1> */}
      <span className="flex row my-4">
        <h4 className="text-xl font-medium">
          <i className="fa-solid fa-circle-check mr-2 text-base"></i>My Tasks
        </h4>

        <p className="font-sm my-2">
          {notes.length > 0 ? "You have empty Notes" : "Recently viewed"}
        </p>
      </span>

      <div className="columns-1">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex bg-white p-3 box-border  shadow-2xl shadow-black/150"
          >
            <div className="flex p-2 justify-between items-center text-xl font-medium border w-[100%]">
              <div className="flex items-center gap-4">
                <i className="fa-solid fa-circle-check"></i>
                <div className="flex flex-col">
                  <h1>{task.title}</h1>
                  <p className="text-xs">2 days left</p>
                </div>
              </div>

              <span>
                <i className="fa-solid fa-star"></i>
              </span>
            </div>
          </div>
        ))}
      </div>
      {/* end my task */}
    </div>
  );
}

export default Home;
