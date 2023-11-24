import React, { useState } from "react";

function Tasks({ tasks, onAddTasks }) {
  const [title, setTitle] = useState("");
  const [task, setTask] = useState("");
  // const [tasks, setTasks] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    const newTask = { id: Date.now(), title, task, isComplete: false };
    if (title !== "") onAddTasks(newTask);
    setTitle("");
    setTask("");
  }

  // function onAddTasks(task) {
  //   setTasks((tasks) => [...tasks, task]);
  // }
  return (
    <div className="container">
      <form
        onSubmit={handleSubmit}
        className=" container flex bg-white w-[100%] flex-col rounded pl-4"
      >
        <span className="flex justify-between mt-3 text-xl font-semibold">
          <p>Add a Task</p>
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
          placeholder="Add a Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="border border-solid border-slate-100 p-2"
        />
        <div className="flex items-center">
          <input className="m-4" type="date" />
          <span>Date/Time</span>
        </div>

        <button className="flex bg-slate-200 w-max rounded-full p-2 items-center justify-content my-4 font-semibold">
          Add Task
        </button>
      </form>

      {tasks.length > 0 && (
        <>
          <span className="flex row my-4">
            <h4 className="text-xl font-medium">
              <i className="fa-solid fa-circle-check mr-2 text-base"></i>My
              Notes
            </h4>
            {/* <p className="font-sm my-2">Recently Viewed</p> */}
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

            {/* sample layout */}
            {/* <div className="flex bg-white p-3 box-border   shadow-2xl shadow-black/150">
          <div className="flex p-2 justify-between items-center text-xl font-medium border w-[100%]">
            <div className="flex items-center gap-4">
              <i className="fa-solid fa-circle-check"></i>
              <div className="flex flex-col">
                <h1>File Upload</h1>
                <p className="text-xs">2 days left</p>
              </div>
            </div>

            <span>
              <i className="fa-solid fa-star"></i>
            </span>
          </div>
        </div> */}
          </div>
        </>
      )}
    </div>
  );
}

export default Tasks;
