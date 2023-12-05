const express = require('express');
const {
  createTask,
  deleteTask,
  getAllTasks,
  getTaskById,
  updateTask,
} = require('../handlers/index');
const tasks = express.Router();

tasks.get('/', getAllTasks);
tasks.get('/:id', getTaskById);
tasks.post('/', createTask);
tasks.put('/:id', updateTask);
tasks.delete('/:id', deleteTask);

module.exports = tasks;
