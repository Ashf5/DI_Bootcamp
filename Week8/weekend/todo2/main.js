
let todoList = document.getElementById('todo_list');

function createItem(e) {
    let div = document.createElement('div');
    div.classList.add('todo-item');

    let input = document.createElement('input');
    input.type = 'checkbox';
    input.name = 'todoCheck'

    let label = document.createElement('label');
    label.for = 'todoCheck';
    label.innerText = 'hi there';

    let button = document.createElement('button');
    button.innerText = 'Remove';
    button.classList.add('remove-button');

    div.append(input, label, button);
    todoList.appendChild(div);

}

createItem('hello')