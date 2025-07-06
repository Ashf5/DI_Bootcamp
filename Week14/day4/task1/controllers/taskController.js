
import { fetchTask, fetchTasks, addTaskData, updateTaskData, deleteTaskData } from "../models/taskModel.js";


export async function getTasks(req, res) {
    try {
        let tasks = await fetchTasks();
        res.status(200).json(tasks);
    }catch(e) {
        console.log(e);
        res.status(500).json({msg: 'Error fetching tasks'});
    }
}


export async function getTask(req, res) {
    let id = +req.params.id;
    if (!id) {
        res.status(400).json({msg: "invalid id provided"});
        return;
    }
    try {
        let task = await fetchTask(id);
        if (!task) {
            res.status(404).json({msg: 'task not found'});
            return;
        }
        res.status(200).json(task);
    }catch(e) {
        console.log(e);
        res.status(500).json({msg: 'error fetching task'});
    }
}


export async function addTask(req, res) {
    let {task, completed} = req.body;
    if(!task) {
        res.status(400).json({msg: 'task and completed are required in the request body'});
        return;
    }else if (typeof completed !== 'boolean') {
        res.status(400).json({msg: 'completed must be a boolean'});
        return;
    }

    try {
        let newTask = await addTaskData(task, completed);
        res.status(201).json(newTask);
    }catch(e) {
        console.log(e);
        res.status(500).json({msg: 'error creating task'});
    }
}


export async function updateTask(req, res) {
    let id = +req.params.id;
    let {task, completed} = req.body;
    if(!id || !task) {
        res.status(400).json({msg: 'incorrect data received'});
        return;
    }else if (typeof completed !== 'boolean'){
        res.status(400).json({msg: 'completed must be a boolean'});
        return;
    }

    try {
        let updated = await updateTaskData(id, task, completed);
        res.status(201).json(updated);
    }catch(e) {
        console.log(e);
        if (e.message === 'Task not found') {
            res.status(404).json({msg: 'task not found'});
            return;
        }
        res.status(500).json({msg: 'error updating data'});
    }
}


export async function deleteTask(req, res) {
    let id = +req.params.id;
    if (!id) {
        res.status(400).json({msg: 'invalid id provided'});
        return;
    }

    try {
        let deleted = await deleteTaskData(id);
        res.json({deleted});
    }catch(e) {
        console.log(e);
        res.status(500).json({msg: 'error deleting task'});
    }
}