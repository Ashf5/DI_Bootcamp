
// Exercise 1

// function isBlank(str) {
//     if (str === '') {
//         return true;
//     }
//     return false;
// }

// console.log(isBlank('abc'))


// Exercise 2 

// function abbrevName(inputName) {
//     let words = inputName.split(' ');
//     lastName = words[words.length - 1][0];
//     return `${words[0]} ${lastName}.`

// }

// console.log(abbrevName('Asher Fried'))


// Exercise 3 

// function swapCase(sentence) {
//     let newString = '';
//     for (let a of sentence) {
//         if (a === a.toUpperCase()){
//             newString += a.toLowerCase();
//         }else {
//             newString += a.toUpperCase();
//         }
//     }
//     return newString;
// }

// console.log(swapCase('The Quick Brown Fox'))


// Exercise 4 

// function isOmnipresent (li, num) {
//     for (let arr of li) {
//         if (!(num in arr)){
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1));
// console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6));

