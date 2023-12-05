const getAllTasks = require('./getAllTasks');
const updateTask = require('./updateTask');
const deleteTask = require('./deleteTask');
const createTask = require('./createTask');
const getTaskById = require('./getTaskById');

module.exports = {
  getAllTasks,
  updateTask,
  createTask,
  deleteTask,
  getTaskById,
};
