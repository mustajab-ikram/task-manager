const express = require('express');
const routes = express.Router();

const tasks = require('./routes/tasks');

const PORT = 3000 || process.env.PORT;

const app = express();
app.use(express.json());
app.use(routes);
// app.get('/', function (req ,res) {
//   res.send
// })
routes.use('/tasks', tasks);

app.listen(PORT, function (err) {
  if (err) {
    throw new Error(err);
  } else {
    console.log(`Server running on PORT: http://127.0.0.1:${PORT}`);
  }
});
