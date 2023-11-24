import React from "react";
import Tasks from "../components/Tasks";
function Task({ tasks, onAddTasks }) {
  return <Tasks tasks={tasks} onAddTasks={onAddTasks} />;
}

export default Task;
