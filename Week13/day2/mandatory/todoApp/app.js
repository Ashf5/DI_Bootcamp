
import { TodoList } from "./todo.js";

let list = new TodoList();

list.addTask('Do Laundry');
list.addTask('Make Supper');
list.addTask('Go To Bank');
list.completeTask('Make Supper');
list.listTasks();