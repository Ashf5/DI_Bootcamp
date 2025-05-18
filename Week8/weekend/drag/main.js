
let dropDiv = document.getElementById('target');

dropDiv.addEventListener('dragover', dragItem);
dropDiv.addEventListener('drop', dropItem);


function dragItem(e){
    e.preventDefault();
    
}

function dropItem(e) {
    e.preventDefault();
    
    let box = document.getElementById('box');
    e.target.appendChild(box);
}