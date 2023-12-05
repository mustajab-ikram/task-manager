const { tasks } = require('../database/tasks.json');

function getTaskById(req, res) {
  const taskId = req.params.id;
  const task = tasks.find((task) => task.id == taskId);
  if (task) {
    res.status(200).send(task);
  } else {
    res.sendStatus(404);
  }
}

module.exports = getTaskById;
