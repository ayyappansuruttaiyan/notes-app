const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: String,
  task: String,
  isComplete: Boolean,
});

const TaskModel = mongoose.model('tasks', TaskSchema);

module.exports = TaskModel;
