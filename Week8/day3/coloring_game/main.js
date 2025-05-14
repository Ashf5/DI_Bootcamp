
let currentColor = 'white';
let isDown = false


createGrid()


function createGrid(){
    // create grid and all the event listeners

    let board = document.getElementsByClassName('board')[0];
    board.addEventListener('mousedown', updateDownMouse);
    board.addEventListener('mouseup', updateUpMouse);

    // make sure if leaves easel it won't color other places
    board.addEventListener('mouseleave', ()=>isDown=false);

    for (let i=0; i < 1200; i++) {
        let div = document.createElement('div');
        div.style.border = '1px grey solid';
        board.appendChild(div);
        
        
        div.addEventListener('mouseover', hoverMouse);
        div.addEventListener('click', colorOne);
    }
}

function updateDownMouse(event){
    isDown = true;
}
function updateUpMouse() {
    isDown = false;
}
function hoverMouse(event){
    
    if (isDown === true) {
        color(event)
    }
}

// functions to color squares
function colorOne(){
    this.style.background = currentColor;
}

function color(event) {
    event.fromElement.style.background = currentColor;
}


// function to clear grid
function clearGrid(){
    let divs = document.querySelectorAll('.board div');
    for (let div of divs) {
        div.style.background = 'white';
    }
}

// palate functions 
// list of colors 

let colors = ['#FF0000', '#FF7F50', '#FFC800', '#FFFF00', '#BFFF00', '#90EE90', '#008000', '#40E0D0', '#00FFFF', '#ADD8E6', '#0000FF', '#00008B', '#000080', '#800080', '#FF00FF', '#FFC0CB', '#FFB6C1','#D3D3D3', '#696969', '#000000', '#FFFFFF'
]

let palate = document.querySelector('div .easel');

colors.forEach(createColor);

function createColor(color) {
    let div = document.createElement('div');
    div.style.background = color;
    div.style.margin = '3px';
    palate.appendChild(div);
    div.addEventListener('click', changeCurrentColor);
}

function changeCurrentColor() {
    currentColor = this.style.background;
}