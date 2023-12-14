import React, { useState } from 'react';
import axios from 'axios';
function Tasks({ tasks, onAddTasks, onToggle, isOpen }) {
  const [title, setTitle] = useState('');
  const [task, setTask] = useState('');

  axios
    .get('http://localhost:3001/tasks')
    .then((task) => console.log(task))
    .catch((err) => console.log(err));
  // const [tasks, setTasks] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    const newTask = { id: Date.now(), title, task, isComplete: false };
    if (title !== '') onAddTasks(newTask);
    axios
      .post('http://localhost:3001/addtasks', {
        id: Date.now(),
        title,
        task,
        isComplete: false,
      })
      .then((task) => console.log(task))
      .catch((err) => console.log(err));
    setTitle('');
    setTask('');
  }

  // function onAddTasks(task) {
  //   setTasks((tasks) => [...tasks, task]);
  // }
  return (
    <div className="container">
      <form
        onSubmit={handleSubmit}
        className=" container flex w-[100%] flex-col rounded bg-white pl-4"
      >
        <span className="mt-3 flex justify-between text-xl font-semibold">
          <p>Add a Task</p>
          <i
            onClick={onToggle}
            className="fa-solid fa-xmark cursor-pointer"
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
              placeholder="Add a Task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className="border border-solid border-slate-100 p-2"
            />
            <div className="flex items-center">
              <input className="m-4" type="date" />
              <span>Date/Time</span>
            </div>

            <button className="justify-content my-4 flex w-max items-center rounded-full bg-slate-200 p-2 font-semibold">
              Add Task
            </button>
          </>
        )}
      </form>

      {tasks.length > 0 && (
        <>
          <span className="row my-4 flex">
            <h4 className="text-xl font-medium">
              <i className="fa-solid fa-circle-check mr-2 text-base"></i>My
              Tasks
            </h4>
          </span>
          <div className="columns-1">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="shadow-black/150 box-border flex bg-white  p-3 shadow-2xl"
              >
                <div className="flex w-[100%] items-center justify-between border p-2 text-xl font-medium">
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
