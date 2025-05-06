
// exercise 1 

// let numbers = [123, 8409, 100053, 333333333, 7] 
// for (let number of numbers) {
//     if (number % 3 == 0) {
//         console.log(`${number} True`);
//     } else {
//         console.log(`${number} False`);
//     }
// }

// exercise 2 

// let guestList = {
//     randy: "Germany",
//     karla: "France",
//     wendy: "Japan",
//     norman: "England",
//     sam: "Argentina"
// };

// let username = prompt('What\'s your name?')
// if (username in guestList) {
//     console.log(`Hi! I'm ${username}, and I'm from ${guestList[username]}`);
// } else {
//     console.log('Hi! I\'m a guest');
// }


// exercise 3 

let age = [20,5,12,43,98,55];
let sum = 0;
let highest = 0;

for (let number of age) {
    sum += number;
    if (number > highest) {
        highest = number;
    }
}
console.log(sum)
console.log(highest)