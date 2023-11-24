import React from "react";

function Archive(notes, tasks) {
  return (
    <div>
      You have {notes.length} Notes and {tasks.length}. But, archived items.
    </div>
  );
}

export default Archive;
