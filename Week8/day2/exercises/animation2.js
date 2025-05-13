
let square = document.getElementById('animate');
let pos = 0;
let id;
function myMove () {
    id = setInterval(moveOne, 1);
}

function moveOne() {
    if (pos >= 350) {
        clearInterval(id);
        return
    }
    pos += 1;
    square.style.left = `${pos}px`;
    
}