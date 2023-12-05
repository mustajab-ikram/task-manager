const { writeFile } = require('fs');
const path = require('path');
const { tasks } = require('../database/tasks.json');

const tasksFilePath = path.join(__dirname, '../database/tasks.json');
function createTask(req, res) {
  const task = req.body;
  tasks.push(task);

  writeFile(tasksFilePath, JSON.stringify({ tasks }), function (err) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });
}

module.exports = createTask;
