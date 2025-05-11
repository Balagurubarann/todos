const Task = require('../models/task.model.js');

exports.createTask = async (req, res, next) => {

  try {

    const { taskTitle, taskDescription, taskPriority, taskDeadLine } = req.body;

    /*
      VALIDATING INPUTS
    */
    if (!taskTitle || !taskDescription) {
      return res.status(400).json({ message: "All fields are required!", success: false });
    }

    // TASK CREATION
    const newTask = new Task({
      taskTitle,
      taskDescription,
      taskPriority,
      taskDeadLine
    });

    await newTask.save();

    // SENDING RESPONSE
    return res.status(201).json({ message: "Task created", success: true, task: newTask });

  } catch (error) {
    next(error);
  }

}

exports.updateTaskStatus = async (req, res, next) => {

  try {

    // GETTING TASK STATUS
    const { taskStatus } = req.body;
    const { taskId } = req.params;

    if (!taskId) {
      return res.status(404).json({ message: "Task ID not found", success: false });
    }

    if (!taskStatus) {
      return res.status(404).json({ message: "Invalid task status", success: false });
    }

    // TASK STATUS UPDATED
    const updatedTask = await Task.findOneAndUpdate(
      { taskId },
      { $set: { taskStatus } },
      { new: true }
    );

    return res.status(200).json({ message: "task status updated", success: true, task: updatedTask });

  } catch (error) {
    next(error);
  }

}
