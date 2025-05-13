
// Exercise 1 
let h1 = document.getElementsByTagName('h1')[0];
console.log(h1)

let article = document.getElementsByTagName('article')[0];
article.removeChild(article.lastElementChild);

let h2 = document.getElementsByTagName('h2')[0];
h2.addEventListener('click', turnRed);

function turnRed(event) {
    alert('called')
    this.style.background='red';
}

let h3 = document.getElementsByTagName('h3')[0];
h3.addEventListener('click', remove);

function remove(event) {
    this.style.display='none';
}

let button = document.createElement('button');
button.onclick = pressed;
button.innerText = 'Press'
article.appendChild(button);

function pressed(event) {
    let paragraphs = document.getElementsByTagName('p');
    for (p of paragraphs) {
        p.style.fontWeight = 'bold';
    }
}

// Exercise 2
let firstForm = document.forms[0];
console.log(firstForm);

console.log(firstForm.fname);
console.log(firstForm.lname);

console.log(firstForm.firstname);
console.log(firstForm.lastname);

let submit = firstForm.submit;
submit.addEventListener('click', submitForm);

function submitForm(event) {
    // prevent default, which is send back to server.
    event.preventDefault();
    let firstName = firstForm.fname.value;
    let lastName = firstForm.lname.value;
    // check if blank
    if (firstName.trim() === '' || lastName.trim() === '') {
        return
    }

    let list = document.getElementsByClassName('usersAnswer')[0];
    for (let item of [firstName, lastName]) {
        let li = document.createElement('li');
        li.innerText = item; 
        list.appendChild(li);
    }
    

}


// Exercise 3 

var allBoldItems;

function getBoldItems(){
    allBoldItems = document.querySelectorAll('#exercise3 strong');
    console.log(allBoldItems);
    
}

function highlight(){
    getBoldItems();
    for (let bold of allBoldItems) {
        bold.style.color = 'blue';
    }
}

function returnItemsToDefault(){
    getBoldItems();
    for (let bold of allBoldItems) {
        bold.style.color = 'black';
    }
}

let text = document.getElementById('exercise3');
text.addEventListener('mouseover', highlight);
text.addEventListener('mouseout', returnItemsToDefault);


// Exercise 4 
// see xp2.js 
// with h2.html 
