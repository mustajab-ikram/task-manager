const { writeFile } = require('fs');
const path = require('path');
const { tasks } = require('../database/tasks.json');

const tasksFilePath = path.join(__dirname, '../database/tasks.json');
function updateTask(req, res) {
  const taskId = req.params.id;
  const task = tasks.find((task) => task.id == taskId);

  if (task) {
    const updatedTask = req.body;
    const newTasksList = tasks.filter((tasks) => tasks.id != taskId);
    newTasksList.push(updatedTask);

    writeFile(
      tasksFilePath,
      JSON.stringify({ tasks: newTasksList }),
      function (err) {
        if (err) {
          res.sendStatus(500);
        } else {
          res.sendStatus(200);
        }
      }
    );
  } else {
    res.sendStatus(404);
  }
}

module.exports = updateTask;
