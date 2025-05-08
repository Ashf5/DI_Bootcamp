
// exercise 5 

let divElement = document.getElementById('container');
console.log(divElement);
let pete = document.getElementsByTagName('li')[1].innerText = 'Richard';

let ul = document.getElementsByClassName('list');
let sarah = ul[1].getElementsByTagName('li')[1];
sarah.remove();

for (let i = 0; i < ul.length; i++) {
    ul[i].getElementsByTagName('li')[0].innerText = 'Asher';
}

for (let i = 0; i < ul.length; i++) {
    ul[i].classList.add('student_list');
}

ul[0].classList.add('university', 'attendance');

divElement.style.background = 'lightblue';
divElement.style.padding = '5px';

let firstLis = ul[1].getElementsByTagName('li');
firstLis[firstLis.length - 1].style.display = 'none';

document.body.style.fontSize = '24px';

// see exercise3.js for exercise 6