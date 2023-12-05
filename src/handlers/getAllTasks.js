const { tasks } = require('../database/tasks.json');

function getAllTasks(req, res) {
  res.status(200).send(tasks);
}

module.exports = getAllTasks;
