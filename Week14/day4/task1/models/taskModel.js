
import { readFile, writeFile } from 'fs/promises';



export async function fetchTasks() {
    let data = await readFile('./models/tasks.json', 'utf-8');
    let jsonData = JSON.parse(data);
    return jsonData;
}

export async function fetchTask(id) {
    let data = await readFile('./models/tasks.json', 'utf-8');
    let jsonData = JSON.parse(data);
    let task = jsonData.find(item => item.id === id);
    return task;
}

export async function addTaskData(task, completed) {
    let data = await readFile('./models/tasks.json', 'utf-8');
    let jsonData = JSON.parse(data);
    let index = jsonData[jsonData.length-1]?.id + 1 || 0;
    let newTask = {id: index, task, completed};
    jsonData.push(newTask);

    await writeFile('./models/tasks.json', JSON.stringify(jsonData));
    return newTask
}


export async function updateTaskData(id, task, completed) {
    let data = await readFile('./models/tasks.json', 'utf-8');
    let jsonData = JSON.parse(data);
    let taskData = jsonData.find(item => item.id === id);
    if (!taskData) {
        throw new Error('Task not found');
    }
    taskData.task = task;
    taskData.completed = completed;
    await writeFile('./models/tasks.json', JSON.stringify(jsonData));
    return taskData;
}


export async function deleteTaskData(id) {
    let data = await readFile('./models/tasks.json', 'utf-8');
    let jsonData = JSON.parse(data);
    let index = jsonData.findIndex(item => item.id === id);
    if(index === -1) {
        throw new Error('task not found');
    }
    let deletedTask = jsonData[index];
    jsonData.splice(index, 1);
    await writeFile('./models/tasks.json', JSON.stringify(jsonData));
    return deletedTask;
}
