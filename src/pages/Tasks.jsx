import React from "react";
import Tasks from "../components/Tasks";
function Task({ tasks, onAddTasks, onToggle, isOpen }) {
  return (
    <Tasks
      tasks={tasks}
      onAddTasks={onAddTasks}
      onToggle={onToggle}
      isOpen={isOpen}
    />
  );
}

export default Task;
