const { writeFile } = require('fs');
const path = require('path');
const { tasks } = require('../database/tasks.json');

const tasksFilePath = path.join(__dirname, '../database/tasks.json');
function deleteTask(req, res) {
  const taskId = req.params.id;
  const newTasks = tasks.filter((task) => task.id != taskId);

  writeFile(tasksFilePath, JSON.stringify({ tasks: newTasks }), function (err) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
}

module.exports = deleteTask;
