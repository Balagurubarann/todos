const router = require('express').Router();
const { createTask, updateTaskStatus } = require('../controllers/task.controller.js');

router
  .post('/create-task', createTask)
  .put('/update-task-status/:taskId', updateTaskStatus)

module.exports = router;
