
let divElement = document.getElementById('navBar');

divElement.setAttribute('id', 'socialNetworkNavigation');
let ul = divElement.getElementsByTagName('ul')[0];


let newElement = document.createElement('li');
let text = document.createTextNode('Logout');
newElement.appendChild(text);
ul.appendChild(newElement);
console.log(ul.firstElementChild.textContent)
console.log(ul.lastElementChild.textContent);


// Exercise 7

let allBooks = [
    {
        'title': 'Harry Potter',
        'author': 'jk rowling',
        'image': 'https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg',
        'alreadyRead': true,
    },
    {
        'title': 'Sherlock Holmes',
        'author': 'Sir forgot his name',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Benedict_Cumberbatch_filming_Sherlock_cropped2.jpg/250px-Benedict_Cumberbatch_filming_Sherlock_cropped2.jpg',
        'alreadyRead': false
    }
]

let section = document.getElementsByClassName('listBooks')[0]
for (item of allBooks){
    let div1 = document.createElement('div');
    div1.innerHTML =`<p>Title: ${item.title} Author: ${item.author}</p><img src=${item.image}>`;
    if (item.alreadyRead) {
        div1.style.color = 'red';
    }
    section.appendChild(div1)

}
