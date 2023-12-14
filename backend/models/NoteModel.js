const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
  title: String,
  note: String,
});

const NoteModel = mongoose.model('notes', NoteSchema);
module.exports = NoteModel;
