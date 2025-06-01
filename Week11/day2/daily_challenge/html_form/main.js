
// Get the button element
let button = document.getElementById('submit-button');
button.addEventListener('click', handleForm);


function handleForm(e) {
    e.preventDefault();
    let form = document.forms.form1;
    
    let name = form.firstName.value;
    let lastname = form.lastName.value;

    let obj = {name, lastname};

    let div = document.getElementById('json-place');
    let node = document.createTextNode(JSON.stringify(obj));
    div.appendChild(node);
    
    
}