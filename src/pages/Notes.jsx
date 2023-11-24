import Notes from "../components/Notes";

function Note({ notes, onAddNotes }) {
  return <Notes notes={notes} onAddNotes={onAddNotes} />;
}

export default Note;
