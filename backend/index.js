const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const NoteModel = require('./models/NoteModel');
const TaskModel = require('./models/TaskModel');
const app = express();

// middleware
app.use(express.json());
app.use(cors());
// db connection
mongoose
  .connect('mongodb://localhost:27017/notesapp')
  .then(() => console.log('db connection success'))
  .catch((err) => console.log(err));

// route for add notes
app.post('/addnotes', (req, res) => {
  NoteModel.create(req.body)
    .then((notes) => res.json(notes))
    .catch((err) => res.json(err));
});

// route for add tasks
app.post('/addtasks', (req, res) => {
  TaskModel.create(req.body)
    .then((task) => res.json(task))
    .catch((err) => res.json(err));
});
app.get('/tasks', (req, res) => {
  const tasks = TaskModel.find()
    .then((tasks) => res.json(tasks))
    .catch((err) => res.json(err));
  console.log(tasks);
});

// port
app.listen(3001, (req, res) => {
  console.log('app listening 3001');
});
