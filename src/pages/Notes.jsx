import Notes from "../components/Notes";

function Note({ notes, onAddNotes, onToggle, isOpen, onDeleteItem }) {
  return (
    <Notes
      notes={notes}
      onAddNotes={onAddNotes}
      onToggle={onToggle}
      isOpen={isOpen}
      onDeleteItem={onDeleteItem}
      
    />
  );
}

export default Note;
