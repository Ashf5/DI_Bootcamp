
// Daily Challenge #1 

// function makeAllCaps(arrayOfWords) {
//     return new Promise((res, rej) => {
//         if (arrayOfWords.every(word => typeof word === 'string')) {
//             res(arrayOfWords.map(word => word.toUpperCase()))
//         }else {
//             rej('The array may only contain strings')
//         }
//     })

// }

// // let result = makeAllCaps(["pear", "banana"])
// // result.then(result => console.log(result))
// // .catch(result => console.log(result));

// function sortWords(uppercasedArray) {
//     return new Promise((res, rej) => {
//         if (uppercasedArray.length > 4) {
//             let sorted = [...uppercasedArray].sort();
//             res(sorted);
//         }else {
//             rej('The array must have a length greater than four.');
//         }
//     })
// }

// //in this example, the catch method is executed
// makeAllCaps([1, "pear", "banana"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result))
//       .catch(error => console.log(error))

// //in this example, the catch method is executed
// makeAllCaps(["apple", "pear", "banana"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result))
//       .catch(error => console.log(error))

// //in this example, you should see in the console, 
// // the array of words uppercased and sorted
// makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
//       .catch(error => console.log(error))



// Daily Challenge #2 

const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`

function toJs(jsonString) {
    let obj = JSON.parse(jsonString);
    return new Promise((res, rej) => {
        if (Object.keys(obj).length === 0 || obj === undefined) {
            rej('Error receiving the json object.');
        }else {
            res(obj);
        }
    })
}

function toMorse(morseJS) {
    let input = prompt('Enter a string');
    let keys = Object.keys(morseJS);
    return new Promise((res, rej) => {
        input = [...input]
        
        if (input.every(char => keys.includes(char))) {
            let morseString = input.map(char => morseJS[char]);
            
            res(morseString);
        }else {
            rej('error')
        }
    })

}


function joinWords(transArray) {
    let div = document.getElementById('array');
    for (item of transArray) {
        let p = document.createElement('p');
        p.innerText = item;
        div.appendChild(p);
    }
    
    
    
}

toJs(morse).then(obj => toMorse(obj))
.then(arr => joinWords(arr));
