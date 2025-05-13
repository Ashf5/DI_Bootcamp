
// challenge 2 Exercise 1
setTimeout(alertHello, 2000);

function alertHello() {
    alert('hello world');
}

let div = document.getElementById('container');
function addParagraph() {
    let p = document.createElement('p');
    p.innerText = 'Hello World';
    div.appendChild(p)
}

// setTimeout(addParagraph, 2000);

// part 2

// let button = document.getElementById('clear');
// button.addEventListener('click', endInterval);
// let id = setInterval(addParagraph, 2000);

// function endInterval() {
//     clearInterval(id);
// }

// part 3
function addParagraphs() {
    let p = document.createElement('p');
    p.innerText = 'Hello World';
    div.appendChild(p);
    count++;
}



let count = 0;
id = setInterval(function () {
    let p = document.createElement('p');
    p.innerText = 'Hello World';
    div.appendChild(p);
    count++;
    if (count === 5) {
        clearInterval(id);
    }
}, 2000)

