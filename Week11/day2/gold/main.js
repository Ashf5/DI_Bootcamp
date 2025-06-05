const params = new URLSearchParams(window.location.search);
const name = params.get('fname');
const lastname = params.get('lname');

let section = document.querySelector('section');
section.innerText = `${name} ${lastname}`
