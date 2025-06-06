
let todoList = document.getElementById('todo_list');

let addButton = document.getElementById('add');
addButton.addEventListener('click', createItem);

let removeButton = document.getElementById('clearAll');
removeButton.addEventListener('click', removeAll);

// This function creates a new todo 
function createItem(e) {
    e.preventDefault();
    if (document.forms[0].todo.value === '') {
        alert('You must enter something');
        return
    }
    let div = document.createElement('div');
    div.classList.add('todo-item');

    let input = document.createElement('input');
    input.type = 'checkbox';
    input.name = 'todoCheck'
    input.addEventListener('change', markDone);

    let label = document.createElement('label');
    label.for = 'todoCheck';
    label.innerText = document.forms[0].todo.value;

    let button = document.createElement('button');
    button.innerText = 'Remove';
    button.classList.add('remove-button');
    button.classList.add('clear')
    button.addEventListener('click', removeSelf);

    div.append(input, label, button);
    todoList.appendChild(div);

    document.forms[0].todo.value = '';

}

// Deletes all todos
function removeAll(e) {
    e.preventDefault();
    let list = document.getElementById('todo_list');
    list.innerHTML = '';
}

// Deletes just the chosen todo
function removeSelf(e) {
    let parent = e.target.parentElement;
    parent.parentElement.removeChild(parent);
    
}

// mark a todo as done.
function markDone(e) {
    if(e.target.checked) {
        let sibling = e.target.nextElementSibling;
        sibling.style.textDecoration = 'line-through';
        
    } else {
        let sibling = e.target.nextElementSibling;
        sibling.style.textDecoration = 'none';
    }
    
}