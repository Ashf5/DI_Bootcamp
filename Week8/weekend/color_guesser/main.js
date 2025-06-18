
// function to deal with the level buttons. Sets level 
function setLevel(e) {
    if (e.target.id === 'easy') {
        level = 1;
    }else if (e.target.id === 'medium') {
        level = 2;
    }else {
        level = 3;
    }
    initialize();
}

// function creates and returns a rgb string.
function getRandomRgb() {
    let nums = [];
    for (let i = 0; i < 3; i++) {
        let randomNum = Math.floor(Math.random() * 256);
        nums.push(randomNum);
    }
    return `rgb(${nums.join(", ")})`;
}


// function to display the rgb color in the html
function displayRgbValue(rgbString) {
    const rgbValueElement = document.getElementById("color-display");
    if (rgbValueElement) {
        rgbValueElement.style.backgroundColor = rgbString;
    } else {
        console.error("Element with id 'rgb-value' not found.");
    }
}


// function that accepts a level number and creates a list of buttons with an rgb color string as the text.
function createButtons(level) {
    const buttonContainer = document.getElementById("choice-area");
    buttonContainer.innerHTML = ""; // Clear previous buttons
    const numButtons = level === 1 ? 3 : level === 2 ? 4 : 6;

    const correctButton = Math.floor(Math.random() * numButtons);
    for (let i = 0; i < numButtons; i++) {
        const button = document.createElement("button");
        const rgbString = i === correctButton ? correctRgb : getRandomRgb();
        button.textContent = rgbString;
        button.addEventListener("click", checkCorrect);
        buttonContainer.appendChild(button);
    }
}

function checkCorrect(e) {
    if (e.target.textContent === correctRgb) {
        gameOver(1);
        
    }else {
        gameOver(-1);
        
    }
    
}

function gameOver(status) {
    let feedbackArea = document.getElementById('feedback-area');
    if (status === 1) {
        let img = document.createElement('img');
        img.src = 'https://media.tenor.com/vU4rjI22utYAAAAM/stepmaniax-under-armor.gif';
        img.alt = 'You Win!!!';
        feedbackArea.appendChild(img);
    } else {
        let img = document.createElement('img');
        img.src = 'https://tse1.explicit.bing.net/th/id/OIP.MfHAlyiUS37OEbX1Wdv5QAHaEK?r=0&rs=1&pid=ImgDetMain';
        img.alt = 'You Lose!';
        feedbackArea.appendChild(img);
    }

    setTimeout( () => resetGame(feedbackArea), 2000);
}

function resetGame(feedbackArea) {
    correctRgb = getRandomRgb();
    displayRgbValue(correctRgb);
    createButtons(level);
    feedbackArea.innerHTML = '';
}

function initialize () {
    correctRgb = getRandomRgb();
    displayRgbValue(correctRgb);
    createButtons(level);
}

let levelButtons = document.getElementsByClassName('level');

Array.from(levelButtons).forEach(item => item.addEventListener('click', setLevel));

let level = 1;
let correctRgb = getRandomRgb();
displayRgbValue(correctRgb);
createButtons(level);