import express from "express";
import { deleteTasks, getMyTasks, newTask, updateTasks } from "../controllers/task.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/newTask",isAuthenticated, newTask);
router.get("/getMyTasks", isAuthenticated, getMyTasks);
router.route("/:id").put(isAuthenticated, updateTasks).delete(isAuthenticated, deleteTasks);

export default router;