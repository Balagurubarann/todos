const { Schema, model } = require('mongoose');
const { v4: uuidv4  } = require('uuid');

const taskSchema = new Schema({
  taskId: {
    type: String,
    required: true,
    unique: true,
    default: uuidv4()
  },
  taskTitle: {
    type: String,
    required: true,
    max: 25
  },
  taskDescription: {
    type: String,
    max: 300,
    required: true,
  },
  taskPriority: {
    type: String,
    required: true,
    enum: ["high", "medium", "low"],
    default: "medium"
  },
  taskStatus: {
    type: String,
    required: true,
    enum: ["pending", "completed", "failed"],
    default: "pending"
  },
  taskDeadLine: {
    type: Date,
    default: () => {
      const now = new Date();
      now.setDate(now.getDate() + 3);
      return now;
    }
  }
}, {
  timestamps: true
});

const Task = model("task", taskSchema);

module.exports = Task;
