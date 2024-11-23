// app.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

let tasks = [];  // Array to store tasks

app.use(bodyParser.json());

// Add Task Route
app.post('/add-task', (req, res) => {
  const { task } = req.body;
  if (task) {
    tasks.push(task);
    res.status(200).send('Task added');
  } else {
    res.status(400).send('Task is required');
  }
});

// View Tasks Route
app.get('/tasks', (req, res) => {
  res.status(200).json(tasks);
});

// Delete Task Route
app.delete('/delete-task', (req, res) => {
  const { task } = req.body;
  tasks = tasks.filter(t => t !== task);
  res.status(200).send('Task deleted');
});

module.exports = app;
