
export class TodoList {
    constructor () {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push({task, completed: false});
    }

    completeTask(taskName) {
        for (let task of this.tasks) {
            if (task.task === taskName) {
                task.completed = true;
                console.log('Task marked as finished');
                return;
            }
        }
    }

    listTasks() {
        this.tasks.forEach(task => console.log(`Task: ${task.task}, Completed: ${task.completed}`));
    }
}