import React, { useState } from "react";

function Tasks() {
  const [title, setTitle] = useState("");
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    const newTask = { id: Date.now(), title, task, isComplete: false };
    if (title !== "") onAddTasks(newTask);
    setTitle("");
    setTask("");
  }

  function onAddTasks(task) {
    setTasks((tasks) => [...tasks, task]);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>Add a Task</h4>
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={task}
          placeholder="Add a task..."
          onChange={(e) => setTask(e.target.value)}
        />
        <button>Add Task</button>
        <div>
          <h4>My Tasks</h4>
          {tasks.map((task) => (
            <div>
              <p>{task.title}</p>
              <p>{task.task}</p>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}

export default Tasks;
