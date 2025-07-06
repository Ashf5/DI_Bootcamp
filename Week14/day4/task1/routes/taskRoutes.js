
import { getTask, getTasks, addTask, updateTask, deleteTask } from "../controllers/taskController.js";

import Router from 'express';

export const router = Router();

router.get('/tasks', getTasks);
router.get('/tasks/:id', getTask);
router.post('/tasks', addTask);
router.put('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);