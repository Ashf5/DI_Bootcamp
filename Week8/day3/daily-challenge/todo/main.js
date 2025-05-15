
const tasks = [];
console.log('hi');

let button = document.getElementById('submit-button');
let listTasks = document.getElementsByClassName('listTasks')[0];
let form = document.forms[0];

button.addEventListener('click', addTask);
function addTask(e) {
    e.preventDefault();
    let task = form.inputField.value;

    // make sure that not blank 
    if (task.trim() === '') {
        return;
    }
    
    tasks.push(task);

    // Create the new task html
    let div = document.createElement('div');
    let span = document.createElement('span');
    span.classList.add('x-class');
    let x = document.createTextNode('X');
    span.classList.add('fas');
    span.style.fontFamily = 'Font Awesome 6 Free';
    span.appendChild(x);
    div.appendChild(span);

    let input = document.createElement('input');
    input.type = 'checkbox';
    input.name = 'taskInput';

    let label = document.createElement('label');
    label.innerText = task;
    label.for = 'taskInput';

    div.appendChild(input);
    div.appendChild(label);
    listTasks.appendChild(div);

    form.inputField.value = '';
}