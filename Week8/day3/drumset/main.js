

let sounds = [{ sound: 'Boom', letter: 'A', file: 'boom.wav' }, { sound: 'Clap', letter: 'S', file: 'clap.wav' }, { sound: 'HiHat', letter: 'D', file: 'hihat.wav' }, { sound: 'Kick', letter: 'F', file: 'kick.wav' }, { sound: 'OpenHat', letter: 'G', file: 'openhat.wav' }, { sound: 'Ride', letter: 'H', file: 'ride.wav' }, { sound: 'Snare', letter: 'J', file: 'snare.wav' }, { sound: 'Tink', letter: 'K', file: 'tink.wav' }, { sound: 'Tom', letter: 'L', file: 'tom.wav' }]

let audioElements = []
let container = document.getElementsByClassName('drum-container')[0];
function createDrums() {
    for (let drum of sounds) {

        let div = createDrum(drum);

        // create audio elements 
        let audio = document.createElement('audio');
        audio.src = 'sounds/' + drum.file;
        drum.audio = audio;

        // add event listeners 
        div.addEventListener('click', mousePress);
        document.addEventListener('keydown', decodeKey);

        

    }
}

function createDrum(drum) {
    // function creates drum elements and returns the div.
    // create div 
    let div = document.createElement('div');
    div.classList.add('drum');

    let h1 = document.createElement('h1');
    h1.innerText = drum.letter;

    div.appendChild(h1);

    let p = document.createElement('p');
    p.innerText = drum.sound;
    div.appendChild(p);

    container.appendChild(div)
    return div;
}

function decodeKey(e) {
    // calls the playSound function with apropriate sound
    letter = e.key;
    let elem;
    switch (letter.toLowerCase()) {
        case 'a':
            elem = 'Boom';
            break;
        case 's':
            elem = 'Clap';
            break;
        case 'd':
            elem = 'HiHat';
            break;
        case 'f':
            elem = 'Kick';
            break;
        case 'g':
            elem = 'OpenHat';
            break;
        case 'h':
            elem = 'Ride';
            break;
        case 'j':
            elem = 'Snare';
            break;
        case 'k':
            elem = 'Tink';
            break;
        case 'l':
            elem = 'Tom';
            break;
        default:
            return;
    }
    playSound(elem);
    
}

function mousePress() {
    // calls playsound with the right press
    let elem = this.getElementsByTagName('p')[0].innerText;
    playSound(elem);
}

function playSound(elem) {
    // plays auto based on the element passed in.
    let audio;
    switch (elem){
        case 'Boom':
            audio = sounds[0].audio;
            break;
        case 'Clap':
            audio = sounds[1].audio;
            break;
        case 'HiHat':
            audio = sounds[2].audio;
            break;
        case 'Kick':
            audio = sounds[3].audio;
            break;
        case 'OpenHat':
            audio = sounds[4].audio;
            break;
        case 'Ride':
            audio = sounds[5].audio;
            break;
        case 'Snare':
            audio = sounds[6].audio;
            break;
        case 'Tink':
            audio = sounds[7].audio;
            break;
        case 'Tom':
            audio = sounds[8].audio;
            break;
            
    }
    

    audio.play();
}

createDrums()
