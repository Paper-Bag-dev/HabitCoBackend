import { Tasks } from "../models/task.js";

export const newTask = async (req, res, next) => {
  const { description } = req.body;

  await Tasks.create({
    description,
    user: req.user,
  });
  res.status(201).json({
    success: true,
    message: "Task Added Succesfully",
  });
};

export const getMyTasks = async (req, res) => {
  const userID = req.user._id;
  const tasks = await Tasks.find({ user: userID });

  res.status(200).json({
    success: true,
    tasks,
  });
};

export const updateTasks = async (req, res) => {
  const task = await Tasks.findById(req.params.id);
  console.log(task);
  if(!task){
    return res.status(404).json({
      success: false,
      message:"Task Not found"
    });
  }

  task.isCompleted = !task.isCompleted;

  await task.save();

  res.status(200).json({
    success: true,
    message: "Task updated",
  });
};

export const deleteTasks = async (req, res) => {
  const task = await Tasks.findById(req.params.id);

  if(!task){
    return res.status(404).json({
      success: false,
      message:"Task Not found"
    });
  }
  await task.deleteOne();

  res.status(200).json({
    success: true,
    message: "Task deleted",
  });
};
